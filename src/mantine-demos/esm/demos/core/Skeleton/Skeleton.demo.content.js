import React, { useState } from 'react';
import { Skeleton, Text, Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
`;
function Demo() {
  const [loading, setLoading] = useState(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Skeleton, { visible: loading }, /* @__PURE__ */ React.createElement(Text, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"), /* @__PURE__ */ React.createElement(Text, null, "Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque.")), /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "xs" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => setLoading((l) => !l) }, "Toggle Skeleton")));
}
const content = {
  type: "code",
  component: Demo,
  code
};

export { content };
//# sourceMappingURL=Skeleton.demo.content.js.map
