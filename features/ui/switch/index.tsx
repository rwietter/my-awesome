import { useEffect, useState } from 'react';
import { useThemeStore } from '@/api/context/theme';
import { actionTheme } from '@/api/context/theme/actions';
import { Flex, SwitchCSS, ThumbCSS } from './styled';

const Switch = () => {
  const { setTheme } = actionTheme();
  const { theme } = useThemeStore();
  const [checked, setChecked] = useState(false);

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme({ theme: newTheme });
  };

  useEffect(() => {
    const checkedThemeButton = theme === 'light';
    setChecked(checkedThemeButton);
  }, [theme]);

  return (
    <form>
      <Flex css={{ alignItems: 'center' }}>
        <SwitchCSS checked={checked} onClick={handleChangeTheme}>
          <ThumbCSS />
        </SwitchCSS>
      </Flex>
    </form>
  );
};

export { Switch };
