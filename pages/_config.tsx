/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { ErrorFallback } from '@/components/error-boundary';
import { dark_theme, light_theme, useThemeStore } from '@/features/ui/theme';
import { globalStyles } from '@/styles/global';

interface ConfigProps {
	children: React.ReactNode;
}

const Config: React.FC<ConfigProps> = ({ children }) => {
  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light_theme : dark_theme;

  useEffect(() => {
    globalStyles();
    const classTheme = document.querySelector('#class-theme');
    if (!classTheme) return;
    classTheme.className = themeMode;
  }, [themeMode]);

  return (
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div id="class-theme">
					{children}
				</div>
			</ErrorBoundary>
		</QueryClientProvider>
  );
};

export default Config;
