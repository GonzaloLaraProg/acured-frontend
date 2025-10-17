# Usuarios Demo - Sistema de Login

## Credenciales de Usuario

### 1. Paciente
- **Nombre:** Paciente Demo
- **Email:** `paciente@demo.com`
- **Contraseña:** `paciente123`
- **Dashboard:** `/patient-dashboard`
- **Descripción:** Usuario paciente que puede ver su historial médico y citas

### 2. Acupunturista Individual
- **Nombre:** Acupunturista Individual
- **Email:** `acupunturista@demo.com`
- **Contraseña:** `acupunturista123`
- **Dashboard:** `/therapist-dashboard`
- **Descripción:** Acupunturista independiente que gestiona sus propios pacientes

### 3. Terapeuta
- **Nombre:** Terapeuta Demo
- **Email:** `terapeuta@demo.com`
- **Contraseña:** `terapeuta123`
- **Dashboard:** `/terapeuta-dashboard`
- **Descripción:** Terapeuta que trabaja en un centro médico

### 4. Centro Médico
- **Nombre:** Centro Médico Demo
- **Email:** `centro@demo.com`
- **Contraseña:** `centro123`
- **Dashboard:** `/centro-dashboard`
- **Descripción:** Administrador de centro médico que gestiona terapeutas y pacientes

### 5. Administrador
- **Nombre:** Administrador
- **Email:** `admin@demo.com`
- **Contraseña:** `admin123`
- **Dashboard:** `/admin-dashboard`
- **Descripción:** Administrador del sistema con acceso a todo

## Cómo Probar

1. Ve a la página de login: `/login`
2. Selecciona "Paciente" o "Acupunturista" según el tipo de usuario
3. Ingresa las credenciales correspondientes
4. Serás redirigido automáticamente al dashboard correspondiente

## ⚠️ Validación de Usuarios

**IMPORTANTE:** El sistema ahora valida que uses las credenciales correctas según la opción seleccionada:

- **Si seleccionas "Acured para pacientes"**: Solo podrás iniciar sesión con credenciales de paciente
- **Si seleccionas "Acured para acupunturistas"**: Solo podrás iniciar sesión con credenciales de acupunturista, terapeuta, centro o administrador

### Ejemplos de Validación:

✅ **Correcto:**
- Seleccionas "Paciente" → Usas `paciente@demo.com` → ✅ Login exitoso
- Seleccionas "Acupunturista" → Usas `acupunturista@demo.com` → ✅ Login exitoso

❌ **Incorrecto:**
- Seleccionas "Paciente" → Usas `acupunturista@demo.com` → ❌ Error: "Este usuario no es un paciente"
- Seleccionas "Acupunturista" → Usas `paciente@demo.com` → ❌ Error: "Este usuario es un paciente"

## Funcionalidades por Rol

### Paciente
- Ver historial médico
- Gestionar citas
- Ver tratamientos
- Configurar perfil

### Acupunturista Individual
- Gestionar pacientes
- Administrar agenda
- Registrar tratamientos
- Ver reportes

### Terapeuta
- Gestionar pacientes asignados
- Registrar tratamientos
- Ver historial médico
- Generar reportes

### Centro Médico
- Gestionar terapeutas
- Administrar pacientes del centro
- Controlar agenda general
- Gestionar recursos y salas
- Control financiero
- Reportes del centro

### Administrador
- Gestionar todos los usuarios
- Supervisar centros médicos
- Monitorear terapeutas
- Vista general de pacientes
- Reportes globales
- Configuración del sistema
- Logs y auditoría
- Gestión de soporte

## Notas Técnicas

- El sistema usa autenticación simulada (sin backend real)
- Los usuarios se almacenan en el contexto de React
- Cada usuario tiene un rol específico y dashboard correspondiente
- La redirección es automática después del login exitoso
