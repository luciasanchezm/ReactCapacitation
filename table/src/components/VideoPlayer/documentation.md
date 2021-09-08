# Reproducir video de Azure Storage con ReactPlayer

Para poder reproducir un video de Azure Media Storage es necesario especificarle en la configuración del archivo que manejará un HLS (Http Live Streaming).

### **Ejemplo:**

```js
<ReactPlayer
	controls
	width='100%'
	config={{file: {forceHLS: true}}} // se indica al componente que trabajará con un HLS
	url={`${azureUrl}(format=m3u8-aapl)`}
/> // también es necesario agregar al final de la URL el formato de video ((format=m3u8-aapl))
```

### Fuente:

https://docs.microsoft.com/en-us/azure/media-services/previous/media-services-deliver-content-overview#URLs
