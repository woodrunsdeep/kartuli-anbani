// taken from here https://stackoverflow.com/a/71036343

export default function i18nHotReload() {
  return {
    name: 'i18n-hot-reload',
    handleHotUpdate({ file, server }) {
      if (file.includes('locales') && file.endsWith('.json')) {
        server.ws.send({
          type: 'custom',
          event: 'locales-update',
        });
      }
    },
  };
}
