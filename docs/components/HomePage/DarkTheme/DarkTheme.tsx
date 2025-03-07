import React from 'react';
import { Button, Image, SimpleGrid, Text, useMantineColorScheme, Group } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { PageSection } from '../PageSection/PageSection';
import classes from './DarkTheme.module.css';
import image from './dark-theme-image.png';

export function DarkTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const code = `
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ colorScheme: '${colorScheme}' }}>
      <App />
    </MantineProvider>
  );
}
`;

  return (
    <PageSection title="Dark color scheme" alt>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt={30} spacing={{ base: 30, sm: 60 }} pb={60}>
        <div>
          <Image src={image.src} radius="md" className={classes.image} />
        </div>
        <div>
          <Text size="lg">
            Add dark theme to your application with just a few lines of code – Mantine exports
            global styles both for light and dark theme, all components support dark theme out of
            the box.
          </Text>

          <CodeHighlight language="tsx" withCopyButton={false} mt="xl" code={code} />

          <Group justify="center" mt="xl">
            <Button
              variant="default"
              radius="md"
              onClick={() => toggleColorScheme()}
              leftSection={
                <>
                  <IconSun className={classes.darkIcon} />
                  <IconMoonStars className={classes.lightIcon} />
                </>
              }
            >
              Toggle color scheme
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </PageSection>
  );
}
