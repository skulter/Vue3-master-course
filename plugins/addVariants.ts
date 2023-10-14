function variantPugin({ addVariant }) {
  addVariant('child', '& > *');
  addVariant('child-hover', '& > *:hover');
  addVariant('child-[x]-hover', '& > [x]:hover');
}

const plugins = [
  variantPugin
]

export default plugins;