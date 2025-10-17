# Guía de Tipografías - Acured

## Tipografías Implementadas

### 1. Neue Haas Grotesk Display Pro
**Uso**: Títulos y subtítulos principales
**Pesos disponibles**: Regular (400) y Medium (500)
**Fuente**: Archivos locales + fallback a Helvetica/Arial

#### Clases CSS disponibles:
- `font-heading-h3` - Títulos H3 (39px, Regular)
- `font-heading-h3-medium` - Títulos H3 (39px, Medium)
- `font-heading-h5` - Títulos H5 (25px, Regular)
- `font-heading-h5-medium` - Títulos H5 (25px, Medium)
- `font-heading-h6` - Títulos H6 (20px, Regular)
- `font-heading-h6-medium` - Títulos H6 (20px, Medium)
- `font-heading-h7` - Títulos H7 (16px, Regular)
- `font-heading-h7-medium` - Títulos H7 (16px, Medium)
- `font-subtitle-1` - Subtítulos (25px, Regular)
- `font-subtitle-1-medium` - Subtítulos (25px, Medium)

### 2. Inter
**Uso**: Párrafos, subtítulos secundarios y texto general
**Pesos disponibles**: Regular (400) y Semibold (600)
**Fuente**: Google Fonts + fallback a system-ui

#### Clases CSS disponibles:
- `font-paragraph-p1` - Párrafos pequeños (12px, Regular)
- `font-paragraph-p1-semibold` - Párrafos pequeños (12px, Semibold)
- `font-paragraph-p2-regular` - Párrafos medianos (14px, Regular)
- `font-paragraph-p2-semibold` - Párrafos medianos (14px, Semibold)
- `font-paragraph-p3` - Párrafos grandes (16px, Regular)
- `font-paragraph-p3-semibold` - Párrafos grandes (16px, Semibold)

### 3. Clases de Familia de Fuente (Alternativas)
- `font-haas` - Nueva Haas Grotesk Display Pro
- `font-inter` - Inter
- `font-sans` - Inter como fuente principal del sistema

## Ejemplos de Uso

### Títulos principales (Neue Haas Grotesk)
```jsx
<h1 className="font-heading-h3 text-primary-900">
  Título Principal
</h1>

<h2 className="font-heading-h5-medium text-primary-800">
  Subtítulo con Medium
</h2>
```

### Párrafos y texto (Inter)
```jsx
<p className="font-paragraph-p3 text-primary-700">
  Párrafo regular con Inter
</p>

<p className="font-paragraph-p2-semibold text-primary-800">
  Texto importante con Semibold
</p>
```

### Subtítulos (Neue Haas Grotesk)
```jsx
<h3 className="font-subtitle-1-medium text-primary-900">
  Subtítulo con Medium
</h3>
```

## Jerarquía Tipográfica Recomendada

1. **Títulos principales**: `font-heading-h3` o `font-heading-h3-medium`
2. **Subtítulos principales**: `font-heading-h5` o `font-heading-h5-medium`
3. **Subtítulos secundarios**: `font-subtitle-1` o `font-subtitle-1-medium`
4. **Párrafos importantes**: `font-paragraph-p3-semibold`
5. **Párrafos regulares**: `font-paragraph-p3`
6. **Texto pequeño**: `font-paragraph-p2-regular` o `font-paragraph-p2-semibold`

## Notas Importantes

- **Neue Haas Grotesk Display Pro** debe usarse para títulos y subtítulos principales
- **Inter** debe usarse para párrafos, subtítulos secundarios y texto general
- Los pesos Medium (500) de Neue Haas Grotesk se usan para énfasis en títulos
- Los pesos Semibold (600) de Inter se usan para texto importante o destacado
- Mantén la consistencia en toda la aplicación usando estas clases

## Configuración Técnica

### Fuentes Cargadas
1. **Inter**: Cargada desde Google Fonts con todos los pesos (100-900)
2. **Neue Haas Grotesk Display Pro**: Configurada para cargar archivos locales desde `/public/fonts/`

### Archivos de Fuente Requeridos
Para que Neue Haas Grotesk funcione completamente, necesitas colocar estos archivos en `/public/fonts/`:
- `NeueHaasGroteskDisplayPro-Roman.woff2` (peso 400)
- `NeueHaasGroteskDisplayPro-Medium.woff2` (peso 500)

### Fallbacks Configurados
- **Neue Haas Grotesk**: Helvetica → Arial → sans-serif
- **Inter**: system-ui → sans-serif

## Migración Completada
✅ Todos los archivos han sido actualizados para usar las clases de tipografía correctas
✅ Reemplazadas las clases `font-haas` y `font-inter` por las clases específicas del sistema
✅ Configuradas las fuentes con fallbacks apropiados
✅ Actualizada la configuración de Tailwind CSS


