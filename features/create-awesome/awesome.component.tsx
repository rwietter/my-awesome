import { FormEvent, useRef, useState } from 'react';

import * as S from './style';
import { Toastfy, notify } from '@/features/ui/toastfy';
import {
  useAwesomeStore,
  contentActions,
} from '@/features/create-awesome/store';
import { ContentItem } from '@/components/contentItem';
import { Button } from '@/features/ui/button';
import { Margin } from '@/features/ui/margin';
import { handleError } from '@/helpers/handler-notify';

const CreateAwesome = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {
    addContentIndex, addContentItem, saveAwesome, resetStore,
  } =		contentActions();
  const [done, setDone] = useState(false);
  const { contentItem, contentIndex } = useAwesomeStore();

  const handleClearPreview = () => resetStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const title = e.currentTarget.awesome.value;

      if (title) {
        const res = await saveAwesome({ title, contentItem }) as Response;

        if (res.status !== 200) {
          throw res;
        }
      }
    } catch (error: any) {
      handleError(error);
    } finally {
      setDone(false);
    }
  };

  const handleAddContentItem = () => {
    const contentText = inputRef.current?.value;

    if (contentText) {
      addContentItem({ contentText, addContentIndex });
    }
  };

  return (
		<>
			<S.Container>
				<S.Section>
					<S.Title>Create Awesome</S.Title>
					<S.Form id="awesome-form" onSubmit={handleSubmit}>
						{done && (
							<>
								<S.Label htmlFor="awesome">Name of awesome</S.Label>
								<S.Input name="awesome" type="text" required />
							</>
						)}

						{!done && (
							<>
								<S.Label htmlFor="links">Add content</S.Label>
								<S.TextArea
									name="links"
									rows={8}
									cols={40}
									ref={inputRef}
									required
									placeholder={
										'Typescript\n- docs, https://www.typescriptlang.org/docs/'
									}
								/>
							</>
						)}
						<Margin margin="1rem" />
						<S.FlexButton>
							{!done && (
								<Button
									type="button"
									color="primary"
									onClick={handleAddContentItem}
								>
									Add content
								</Button>
							)}
							{done && (
								<Button type="submit" color="secondary" data-margin="margin">
									Save awesome
								</Button>
							)}
							{!done && (
								<Button
									type="button"
									data-margin="margin"
									color="secondary"
									onClick={() => setDone((state) => !state)}
								>
									Ok, I am done!
								</Button>
							)}
							{contentItem[contentIndex[0]] && (
								<Button
									type="button"
									color="tertiary"
									onClick={handleClearPreview}
								>
									Clear preview
								</Button>
							)}
						</S.FlexButton>
					</S.Form>
				</S.Section>
				<S.Section>
					<S.Title data-type="preview">Preview your awesome content</S.Title>
					<S.Section>
						<ContentItem
							pageIndex={contentIndex}
							pageContent={contentItem}
							isOk={{ isLoading: false, isError: false }}
						/>
					</S.Section>
				</S.Section>
			</S.Container>
			<Toastfy />
		</>
  );
};

export { CreateAwesome };
