const testPlugin = {
  name: 'module-info',
  resolveId(id) {
    if (id === 'virtual-file') {
      return { id, meta: { moduleInfo: { canYouSeeMe: true } } };
    }
  },
  load(id) {
    if (id === 'virtual-file') {
      const { meta } = this.getModuleInfo(id);
      if (!meta || !meta.moduleInfo) {
        throw new Error('Missing moduleInfo custom meta');
      }

      return '';
    }
  },
};

export default {
  plugins: [testPlugin],
};
