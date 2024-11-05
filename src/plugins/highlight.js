import hljs from 'highlight.js';

export default {
  mounted(el) {
    const codeBlocks = el.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  },
  updated(el) {
    const codeBlocks = el.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  },
};
