# Buscador de Imágenes en React y Node

Este proyecto es un buscador de imágenes desarrollado con React  con Node y la API de Pixabay.

## Descripción del Proyecto 🚀

El Buscador de Imágenes permite a los usuarios buscar imágenes por palabras clave y explorar los resultados de manera paginada.

## Instalación 🛠️

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/DannyCrisostomo/React_API_Imagenes.git
   ```

2. **Configuración de la API de Pixabay:**

   Obtén tu clave de API en [Pixabay](https://pixabay.com/api/docs/) y configúrala en `config.js `

 ```bash
    consultarApi = () => {
    const pagina = this.state.pagina
    const cantidad_imagenes = 30;
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=41898943-e54d7904b9dc143b4b3cbce98&q=${termino}&per_page=${cantidad_imagenes}&page=${pagina}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits })

        // this.setState({imagenes:resultado.hits})

        // console.log(resultado.hits)
      )
```
   

3. **Ejecuta la aplicación:**

   ```bash
   npm start
   ```

## Uso 🖥️

1. **Accede a `http://localhost:3000` en tu navegador.**
2. **Ingresa palabras clave en el buscador y presiona "Buscar".**
3. **Explora las imágenes y haz clic para ver detalles.**

## Contribución 💡

¡Contribuciones son bienvenidas! Por favor, sigue las instrucciones del README para contribuir.

## Licencia 📝

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## Autor 👤

- Danny Crisostomo (<Dannyvidalcrisostomocuri@gmail.com>)

---

**¡Esperamos que disfrutes usando el Buscador de Imágenes!**
