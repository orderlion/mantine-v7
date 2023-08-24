import React from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { rem, Notification } from '@mantine/core';

const code = `
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`;
function Demo() {
  const xIcon = /* @__PURE__ */ React.createElement(IconX, { style: { width: rem(20), height: rem(20) } });
  const checkIcon = /* @__PURE__ */ React.createElement(IconCheck, { style: { width: rem(20), height: rem(20) } });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Notification, { icon: xIcon, color: "red", title: "Bummer!" }, "Something went wrong"), /* @__PURE__ */ React.createElement(Notification, { icon: checkIcon, color: "teal", title: "All good!", mt: "md" }, "Everything is fine"));
}
const icon = {
  type: "code",
  component: Demo,
  dimmed: true,
  maxWidth: 400,
  centered: true,
  code
};

export { icon };
//# sourceMappingURL=Notification.demo.icon.js.map
