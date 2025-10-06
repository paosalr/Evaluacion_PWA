# PWA App Shell - Aplicación Web Progresiva

## Descripción del Proyecto

Aplicación Web Progresiva (PWA) desarrollada con arquitectura App Shell que permite funcionamiento offline mediante Service Worker. Implementa una tienda de productos como ejemplo de contenido dinámico.

Este proyecto cumple con todos los requisitos solicitados:
- Estructura completa de App Shell (Header, Menu, Footer, Contenido)
- Service Worker para caché y funcionamiento offline
- Archivo manifest.json configurado
- Contenido dinámico simulado (lista de productos)
- Documentación completa

---

## Arquitectura del Proyecto

### App Shell

La arquitectura App Shell separa la estructura base de la aplicación del contenido dinámico, permitiendo cargas rápidas y funcionamiento offline.

*Componentes Estáticos (App Shell):*
- *Header* (src/components/Header.jsx): Encabezado con título y indicador de estado de conexión (online/offline)
- *Menu* (src/components/Menu.jsx): Menú de navegación principal con dos opciones
- *Footer* (src/components/Footer.jsx): Pie de página con información de copyright
- *Estilos* (src/App.css): CSS puro con prefijos vendor para compatibilidad

*Contenido Dinámico:*
- *ProductList* (src/components/ProductList.jsx): Lista de 8 productos que simula carga asíncrona desde una API
- Vista "Acerca de" con información sobre la PWA

### Service Worker

Ubicado en public/service-worker.js, implementa:

1. *Evento Install*: Cachea los recursos esenciales del App Shell
2. *Evento Activate*: Limpia cachés antiguos y activa el nuevo Service Worker
3. *Evento Fetch*: Intercepta las peticiones de red:
   - Si el recurso está en caché, lo sirve inmediatamente
   - Si no está, lo descarga y lo cachea para uso futuro
   - En caso de error de red, sirve recursos desde el caché

*Estrategia implementada:* Cache First (prioriza caché sobre red)

### Web App Manifest

Archivo public/manifest.json que define:
- *name*: Nombre completo de la aplicación
- *short_name*: Nombre corto para pantalla de inicio
- *icons*: Íconos en tamaños 192x192 y 512x512 píxeles
- *theme_color*: Color del tema (#667eea - morado)
- *background_color*: Color de fondo (#ffffff - blanco)
- *display*: standalone (app de pantalla completa)
- *start_url*: URL de inicio

---

## 🛠️ Tecnologías Utilizadas

- *React 18*: Framework de JavaScript para UI
- *Vite 4*: Herramienta de construcción y desarrollo rápido
- *CSS3 Puro*: Estilos sin preprocesadores (Grid, Flexbox)
- *Service Worker API*: Para caché y funcionamiento offline
- *Web App Manifest*: Para instalación como PWA
- *JavaScript ES6*: Sintaxis moderna

---

## Instalación

### Requisitos Previos
- Node.js versión 14 o superior
- npm versión 6 o superior

### Pasos de Instalación

bash
# 1. Clonar el repositorio
git clone https://github.com/paosalr/Evaluacion_PWA.git
cd pwa-app-shell

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Previsualizar build de producción
npm run preview


---

### Configuración del Service Worker

El Service Worker se registra automáticamente al cargar la aplicación. La configuración se encuentra en src/App.jsx:

javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado');
      });
  });
}


---

## Cómo Ejecutar

### Modo Desarrollo

bash
npm run dev


- Abre automáticamente en http://localhost:3000
- Hot Module Replacement (HMR) activado
- *IMPORTANTE*: El Service Worker NO funciona en modo desarrollo

### Modo Producción

bash
npm run build
npm run preview


- Compila el proyecto optimizado
- Abre en http://localhost:4173
- *AQUÍ SÍ funciona el Service Worker*

---

## Cómo Probar el Funcionamiento Offline

### Método 1: Chrome DevTools

1. Abre el proyecto en Chrome
2. Presiona F12 para abrir DevTools
3. Ve a la pestaña *Application*
4. En el menú izquierdo: *Service Workers*
5. Verifica que aparezca: "Activated and is running"
6. Ve a la pestaña *Network*
7. Marca el checkbox *Offline*
8. Recarga la página (Cmd + R o Ctrl + R)
9. La aplicación debe seguir funcionando

### Método 2: Verificar Caché

1. Abre DevTools (F12)
2. Ve a *Application > Cache Storage*
3. Expande pwa-app-shell-v1
4. Verás los archivos cacheados
5. Esto confirma que el caché está activo

### Método 3: Desconectar Red

1. Abre la aplicación en producción
2. Espera a que cargue completamente
3. Desactiva WiFi en tu dispositivo
4. Recarga la página
5. La app debe funcionar normalmente

---

## Instalación como PWA

### En Desktop (Chrome, Edge, Brave)

1. Visita la aplicación
2. Busca el ícono de instalación en la barra de direcciones
3. Click en "Instalar"
4. La app se abrirá como aplicación nativa

### En Android

1. Abre en Chrome
2. Menu (⋮) > "Agregar a pantalla de inicio"
3. Confirma la instalación
4. El ícono aparecerá en tu launcher

### En iOS (Safari)

1. Abre en Safari
2. Botón Compartir > "Agregar a pantalla de inicio"
3. Confirma el nombre
4. La app aparecerá en tu pantalla de inicio

---