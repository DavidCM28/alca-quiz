// Datos del examen
let examData = {
    studentName: '',
    instructorName: '',
    examDate: '',
    topic: '',
    answers: [],
    currentQuestion: 0,
    score: 0
};

// Preguntas organizadas por tema (10 preguntas cada uno)
const questionsByTopic = {
    "Facturación": [
        {
            question: "¿Qué documento fiscal es obligatorio emitir por cada servicio de transporte?",
            options: ["Ticket", "Factura", "Recibo", "Vale"],
            correct: 1
        },
        {
            question: "¿Cuáles son los datos mínimos que debe contener una factura?",
            options: ["Solo el monto", "RFC, fecha y monto", "RFC, fecha, monto y descripción del servicio", "Solo la fecha"],
            correct: 2
        },
        {
            question: "¿Cada cuánto tiempo se debe reportar la facturación al SAT?",
            options: ["Diario", "Semanal", "Mensual", "Anual"],
            correct: 2
        },
        {
            question: "¿Qué porcentaje de IVA se aplica al servicio de transporte?",
            options: ["0%", "8%", "16%", "32%"],
            correct: 2
        },
        {
            question: "¿Cuál es el plazo máximo para enviar la factura al cliente?",
            options: ["24 horas", "48 horas", "72 horas", "Una semana"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer si se cancela un viaje ya facturado?",
            options: ["Ignorarlo", "Cancelar la factura", "Cobrar completo", "Enviar nota de crédito"],
            correct: 3
        },
        {
            question: "¿Qué información debe contener el complemento de carta porte?",
            options: ["Solo origen y destino", "Origen, destino y mercancía", "Origen, destino, mercancía y datos del transportista", "Solo la mercancía"],
            correct: 2
        },
        {
            question: "¿Cuándo se considera devengado el ingreso por transporte?",
            options: ["Al cobrar", "Al firmar el contrato", "Al entregar la mercancía", "Al emitir la factura"],
            correct: 2
        },
        {
            question: "¿Qué documento respalda los gastos de combustible?",
            options: ["Ticket de gasolina", "Factura del combustible", "Vale de gasolina", "Recibo simple"],
            correct: 1
        },
        {
            question: "¿Cuál es la retención de ISR que pueden aplicar los clientes?",
            options: ["4%", "6%", "10%", "16%"],
            correct: 1
        }
    ],
    "Tráfico": [
        {
            question: "¿Cuál es la función principal del área de tráfico?",
            options: ["Reparar vehículos", "Coordinar rutas y asignar unidades", "Facturar servicios", "Contratar personal"],
            correct: 1
        },
        {
            question: "¿Qué documento debe revisar tráfico antes de autorizar un viaje?",
            options: ["Solo la orden de servicio", "Orden de servicio y disponibilidad de unidad", "Solo el contrato", "Ninguno"],
            correct: 1
        },
        {
            question: "¿Cuál es el horario de mayor demanda de servicios?",
            options: ["Madrugada", "Mañana", "Tarde", "Depende del tipo de servicio"],
            correct: 3
        },
        {
            question: "¿Qué debe hacer tráfico cuando una unidad presenta falla mecánica?",
            options: ["Esperar a que se repare", "Asignar unidad de reemplazo", "Cancelar el servicio", "Ignorar la falla"],
            correct: 1
        },
        {
            question: "¿Qué información debe proporcionar tráfico al operador?",
            options: ["Solo el destino", "Origen, destino y horario", "Origen, destino, horario y contacto del cliente", "Solo el horario"],
            correct: 2
        },
        {
            question: "¿Cuánto tiempo antes debe confirmarse un servicio programado?",
            options: ["30 minutos", "1 hora", "2 horas", "4 horas"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer si el cliente solicita un cambio de ruta?",
            options: ["Rechazarlo", "Aceptarlo inmediatamente", "Evaluar factibilidad y comunicar al operador", "Ignorar la solicitud"],
            correct: 2
        },
        {
            question: "¿Cuál es la prioridad al asignar unidades?",
            options: ["La más nueva", "La más cercana", "La más grande", "La del operador preferido"],
            correct: 1
        },
        {
            question: "¿Qué documento debe generar tráfico para cada servicio?",
            options: ["Factura", "Orden de trabajo", "Contrato", "Recibo"],
            correct: 1
        },
        {
            question: "¿Cómo debe comunicarse tráfico con los operadores?",
            options: ["Solo por teléfono", "Solo por radio", "Por radio, teléfono y sistemas de comunicación", "Solo presencial"],
            correct: 2
        }
    ],
    "Carta Porte": [
        {
            question: "¿Desde cuándo es obligatorio el complemento carta porte?",
            options: ["2020", "2021", "2022", "2023"],
            correct: 1
        },
        {
            question: "¿Qué tipo de transporte requiere obligatoriamente carta porte?",
            options: ["Solo terrestre", "Solo marítimo", "Terrestre de carga y pasaje foráneo", "Solo aéreo"],
            correct: 2
        },
        {
            question: "¿Cuáles son las figuras de transporte en carta porte?",
            options: ["Solo transportista", "Transportista y operador", "Transportista, operador y propietario", "Solo operador"],
            correct: 2
        },
        {
            question: "¿Qué información de la mercancía es obligatoria?",
            options: ["Solo peso", "Peso y descripción", "Peso, descripción y código SAT", "Solo descripción"],
            correct: 2
        },
        {
            question: "¿Cuándo debe emitirse la carta porte?",
            options: ["Al finalizar el viaje", "Antes de iniciar el viaje", "Durante el viaje", "Después de la entrega"],
            correct: 1
        },
        {
            question: "¿Qué documento debe acompañar la carta porte?",
            options: ["Solo la factura", "La factura correspondiente", "Solo el remito", "Ninguno"],
            correct: 1
        },
        {
            question: "¿Cuál es la multa por no portar carta porte?",
            options: ["$1,000 a $5,000", "$5,000 a $10,000", "$17,370 a $86,850", "$100,000"],
            correct: 2
        },
        {
            question: "¿Qué datos del vehículo son obligatorios?",
            options: ["Solo placas", "Placas y modelo", "Placas, modelo y configuración vehicular", "Solo el modelo"],
            correct: 2
        },
        {
            question: "¿Quién puede solicitar la carta porte durante un viaje?",
            options: ["Solo la policía", "Autoridades fiscales y de transporte", "Solo el cliente", "Cualquier persona"],
            correct: 1
        },
        {
            question: "¿Qué sucede si hay diferencias entre la mercancía y la carta porte?",
            options: ["No pasa nada", "Se aplican multas y retención", "Solo una advertencia", "Se cancela el viaje"],
            correct: 1
        }
    ],
    "Bancos": [
        {
            question: "¿Cuál es el horario de corte para transferencias bancarias?",
            options: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
            correct: 1
        },
        {
            question: "¿Qué documento se requiere para abrir una cuenta empresarial?",
            options: ["Solo identificación", "Acta constitutiva y identificación", "Solo RFC", "Solo comprobante de domicilio"],
            correct: 1
        },
        {
            question: "¿Cuánto tiempo tardan las transferencias SPEI?",
            options: ["24 horas", "2 horas", "Inmediato", "1 hora"],
            correct: 2
        },
        {
            question: "¿Qué comisión cobran los bancos por transferencias?",
            options: ["Es gratuito", "Varía según el banco", "Siempre $50", "Siempre $100"],
            correct: 1
        },
        {
            question: "¿Cuál es el límite diario para transferencias electrónicas?",
            options: ["$50,000", "$100,000", "Depende del banco y tipo de cuenta", "$500,000"],
            correct: 2
        },
        {
            question: "¿Qué información necesita el beneficiario para recibir una transferencia?",
            options: ["Solo el nombre", "Nombre y CLABE", "Nombre, CLABE y banco", "Solo la CLABE"],
            correct: 2
        },
        {
            question: "¿Cuántos dígitos tiene una CLABE interbancaria?",
            options: ["16", "18", "20", "22"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer si una transferencia no se acredita?",
            options: ["Esperar", "Contactar al banco inmediatamente", "Hacer otra transferencia", "No hacer nada"],
            correct: 1
        },
        {
            question: "¿Cuál es el horario de operación de la banca electrónica?",
            options: ["8 AM - 6 PM", "24 horas", "9 AM - 5 PM", "Solo días hábiles"],
            correct: 1
        },
        {
            question: "¿Qué documento genera el banco por cada transferencia?",
            options: ["Ticket", "Comprobante electrónico", "Factura", "Recibo simple"],
            correct: 1
        }
    ],
    "Nóminas": [
        {
            question: "¿Cuáles son las prestaciones mínimas de ley?",
            options: ["Solo aguinaldo", "Aguinaldo y vacaciones", "Aguinaldo, vacaciones y prima vacacional", "Solo salario"],
            correct: 2
        },
        {
            question: "¿Cuántos días de aguinaldo corresponden como mínimo?",
            options: ["10 días", "15 días", "20 días", "30 días"],
            correct: 1
        },
        {
            question: "¿Qué porcentaje de prima vacacional es obligatorio?",
            options: ["15%", "20%", "25%", "30%"],
            correct: 2
        },
        {
            question: "¿Cuáles son las deducciones obligatorias en nómina?",
            options: ["Solo ISR", "ISR e IMSS", "ISR, IMSS e INFONAVIT", "Todas las anteriores"],
            correct: 3
        },
        {
            question: "¿Cuándo debe pagarse la nómina?",
            options: ["Cuando se pueda", "Máximo cada 15 días", "Cada mes", "No hay límite"],
            correct: 1
        },
        {
            question: "¿Qué documento debe entregarse al trabajador con su pago?",
            options: ["Recibo simple", "Recibo de nómina timbrado", "Solo efectivo", "Ninguno"],
            correct: 1
        },
        {
            question: "¿Cuál es el porcentaje de aportación patronal al IMSS?",
            options: ["5%", "10%", "Varía según el salario", "15%"],
            correct: 2
        },
        {
            question: "¿Qué es el SBC (Salario Base de Cotización)?",
            options: ["Salario neto", "Salario bruto", "Salario para calcular prestaciones de seguridad social", "Salario mínimo"],
            correct: 2
        },
        {
            question: "¿Cuántos días de vacaciones corresponden en el primer año?",
            options: ["5 días", "6 días", "10 días", "15 días"],
            correct: 1
        },
        {
            question: "¿Hasta cuándo puede pagarse el aguinaldo?",
            options: ["31 de diciembre", "20 de diciembre", "15 de diciembre", "Enero del siguiente año"],
            correct: 1
        }
    ],
    "Recepción": [
        {
            question: "¿Cuál es la primera impresión que debe dar la recepción?",
            options: ["Indiferencia", "Profesionalismo y cordialidad", "Prisa", "Seriedad extrema"],
            correct: 1
        },
        {
            question: "¿Cómo debe contestar el teléfono en recepción?",
            options: ["Solo 'Bueno'", "Saludo, empresa y nombre", "Solo el nombre de la empresa", "Cualquier forma"],
            correct: 1
        },
        {
            question: "¿Qué información debe solicitar a los visitantes?",
            options: ["Solo el nombre", "Nombre y empresa", "Nombre, empresa y motivo de visita", "Ninguna"],
            correct: 2
        },
        {
            question: "¿Cuánto tiempo máximo debe esperar un visitante?",
            options: ["No hay límite", "5 minutos", "15 minutos máximo", "30 minutos"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer si la persona que buscan no está disponible?",
            options: ["Decir que no está", "Ofrecer tomar recado", "Ofrecer alternativas y tomar recado", "Pedirle que regrese"],
            correct: 2
        },
        {
            question: "¿Cómo debe manejar múltiples llamadas?",
            options: ["Ignorar las otras", "Contestar por orden de llegada", "Poner en espera cortésmente", "Colgar"],
            correct: 2
        },
        {
            question: "¿Qué información confidencial NO debe dar recepción?",
            options: ["Horarios de oficina", "Información personal de empleados", "Ubicación de la empresa", "Servicios de la empresa"],
            correct: 1
        },
        {
            question: "¿Cuál es la forma correcta de transferir una llamada?",
            options: ["Colgar directamente", "Anunciar la llamada", "Anunciar la llamada y confirmar", "Transferir sin avisar"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer con los mensajes recibidos?",
            options: ["Guardarlos", "Entregarlos inmediatamente", "Entregarlos al final del día", "Olvidarlos"],
            correct: 1
        },
        {
            question: "¿Cómo debe mantener el área de recepción?",
            options: ["Como sea", "Limpia y organizada", "Solo limpia", "Solo organizada"],
            correct: 1
        }
    ],
    "Contabilidad": [
        {
            question: "¿Cuáles son los estados financieros básicos?",
            options: ["Solo balance", "Balance y estado de resultados", "Balance, estado de resultados y flujo de efectivo", "Solo flujo de efectivo"],
            correct: 2
        },
        {
            question: "¿Qué es el ciclo contable?",
            options: ["Un año", "El proceso de registro desde el asiento hasta los estados financieros", "Solo los asientos", "Solo el balance"],
            correct: 1
        },
        {
            question: "¿Cuándo debe cerrarse el ejercicio contable?",
            options: ["Cuando se quiera", "31 de diciembre", "30 de junio", "No hay fecha"],
            correct: 1
        },
        {
            question: "¿Qué documentos debe conservar contabilidad?",
            options: ["Solo facturas", "Facturas y recibos", "Toda la documentación soporte", "Ninguno"],
            correct: 2
        },
        {
            question: "¿Cuánto tiempo deben conservarse los registros contables?",
            options: ["1 año", "3 años", "5 años", "10 años"],
            correct: 2
        },
        {
            question: "¿Qué es la ecuación contable básica?",
            options: ["Activo = Pasivo", "Activo = Capital", "Activo = Pasivo + Capital", "Pasivo = Capital"],
            correct: 2
        },
        {
            question: "¿Cuándo debe presentarse la declaración anual?",
            options: ["Marzo", "Abril", "Mayo", "Junio"],
            correct: 1
        },
        {
            question: "¿Qué es la depreciación?",
            options: ["Aumento de valor", "Disminución del valor de activos fijos", "Un gasto", "Un impuesto"],
            correct: 1
        },
        {
            question: "¿Cuál es la base del registro contable?",
            options: ["Efectivo", "Devengado", "Ambas según el caso", "Ninguna"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer contabilidad con las conciliaciones bancarias?",
            options: ["Una vez al año", "Mensualmente", "Cuando haya tiempo", "No es necesario"],
            correct: 1
        }
    ],
    "Liquidaciones": [
        {
            question: "¿Qué documentos se requieren para liquidar a un operador?",
            options: ["Solo recibos de combustible", "Gastos comprobados del viaje", "Todos los comprobantes del viaje", "Ninguno"],
            correct: 2
        },
        {
            question: "¿Cuánto tiempo después del viaje debe hacerse la liquidación?",
            options: ["Inmediatamente", "24 horas", "48 horas", "Una semana"],
            correct: 1
        },
        {
            question: "¿Qué gastos son deducibles en la liquidación?",
            options: ["Todos", "Solo combustible", "Gastos autorizados y comprobados", "Ninguno"],
            correct: 2
        },
        {
            question: "¿Cómo debe documentarse el pago de casetas?",
            options: ["No es necesario", "Con ticket de caseta", "Con cualquier papel", "De memoria"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer si faltan comprobantes?",
            options: ["Liquidar sin ellos", "No liquidar", "Solicitar explicación al operador", "Inventar los gastos"],
            correct: 2
        },
        {
            question: "¿Cuál es el procedimiento si hay gastos no autorizados?",
            options: ["Pagarlos todos", "No pagar ninguno", "Revisar caso por caso", "Descontarlos del operador"],
            correct: 2
        },
        {
            question: "¿Qué información debe contener la liquidación?",
            options: ["Solo el total", "Desglose de todos los conceptos", "Solo los gastos", "Solo los ingresos"],
            correct: 1
        },
        {
            question: "¿Quién debe autorizar gastos extraordinarios?",
            options: ["El operador", "Cualquiera", "El supervisor o gerente", "Nadie"],
            correct: 2
        },
        {
            question: "¿Cómo debe manejarse el combustible no utilizado?",
            options: ["Es del operador", "Debe devolverse", "Se queda la empresa", "Se desecha"],
            correct: 1
        },
        {
            question: "¿Qué debe hacerse con las facturas de gastos?",
            options: ["Tirarlas", "Guardarlas organizadas", "Darlas al operador", "No importa"],
            correct: 1
        }
    ],
    "Recursos Humanos": [
        {
            question: "¿Cuáles son los documentos básicos para contratar personal?",
            options: ["Solo CURP", "CURP, RFC e INE", "Documentos de identificación, comprobantes y referencias", "Solo referencias"],
            correct: 2
        },
        {
            question: "¿Cuál es el periodo máximo de prueba para un trabajador?",
            options: ["15 días", "30 días", "60 días", "90 días"],
            correct: 1
        },
        {
            question: "¿Qué debe contener un expediente laboral?",
            options: ["Solo contrato", "Contrato y documentos personales", "Historial completo del empleado", "Solo datos personales"],
            correct: 2
        },
        {
            question: "¿Cuándo debe darse de alta a un trabajador en el IMSS?",
            options: ["Cuando se pueda", "Antes de iniciar labores", "Después de la primera semana", "Al mes"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer RH ante una renuncia?",
            options: ["Aceptarla inmediatamente", "Procesar finiquito y baja", "Ignorarla", "Convencer de quedarse"],
            correct: 1
        },
        {
            question: "¿Cuáles son las causas justificadas de despido?",
            options: ["Cualquier motivo", "Solo robo", "Las establecidas en la Ley Federal del Trabajo", "No existen"],
            correct: 2
        },
        {
            question: "¿Qué debe incluir un finiquito?",
            options: ["Solo salario pendiente", "Salario y prestaciones proporcionales", "Todo lo adeudado al trabajador", "Solo aguinaldo"],
            correct: 2
        },
        {
            question: "¿Cuándo debe entregarse el finiquito?",
            options: ["Cuando se pueda", "Al momento del término de la relación laboral", "A los 15 días", "Al mes"],
            correct: 1
        },
        {
            question: "¿Qué capacitación debe proporcionar la empresa?",
            options: ["Ninguna", "Solo técnica", "Inicial y continua para el puesto", "Solo de seguridad"],
            correct: 2
        }
    ],
    "Monitoreo": [
        {
            question: "¿Cuál es la función principal del monitoreo?",
            options: ["Vigilar a los operadores", "Supervisar y dar seguimiento a las unidades", "Solo ubicar vehículos", "Controlar velocidad"],
            correct: 1
        },
        {
            question: "¿Qué información debe reportar monitoreo en caso de emergencia?",
            options: ["Solo la ubicación", "Ubicación y tipo de emergencia", "Ubicación, emergencia y acciones tomadas", "Nada"],
            correct: 2
        },
        {
            question: "¿Con qué frecuencia debe verificarse la posición de las unidades?",
            options: ["Una vez al día", "Cada hora", "Constantemente durante operación", "Solo cuando hay problemas"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer monitoreo si una unidad se desvía de ruta?",
            options: ["Ignorarlo", "Contactar al operador", "Reportar inmediatamente", "Esperar a que regrese"],
            correct: 1
        },
        {
            question: "¿Cuáles son las alertas principales que debe monitorear?",
            options: ["Solo velocidad", "Velocidad y ubicación", "Velocidad, ubicación, combustible y emergencias", "Solo emergencias"],
            correct: 2
        },
        {
            question: "¿Qué información debe registrarse en cada turno?",
            options: ["Nada", "Solo incidentes", "Bitácora completa de eventos", "Solo ubicaciones"],
            correct: 2
        },
        {
            question: "¿Cómo debe comunicarse monitoreo con los operadores?",
            options: ["Solo por radio", "Por todos los medios disponibles", "Solo por teléfono", "Solo en emergencias"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer si se pierde comunicación con una unidad?",
            options: ["Esperar", "Intentar contactar por todos los medios", "Reportar inmediatamente", "Ambas b y c"],
            correct: 3
        },
        {
            question: "¿Cuándo debe activarse el protocolo de emergencia?",
            options: ["Nunca", "Solo en accidentes", "En cualquier situación de riesgo", "Solo si lo solicita el operador"],
            correct: 2
        },
        {
            question: "¿Qué reportes debe generar monitoreo?",
            options: ["Ninguno", "Solo de incidentes", "Reportes diarios de operación", "Solo semanales"],
            correct: 2
        }
    ],
    "Sistemas": [
        {
            question: "¿Cuál es la responsabilidad principal del área de sistemas?",
            options: ["Solo reparar computadoras", "Mantener la infraestructura tecnológica", "Solo instalar software", "Solo dar soporte"],
            correct: 1
        },
        {
            question: "¿Con qué frecuencia deben realizarse respaldos de información?",
            options: ["Nunca", "Una vez al mes", "Diariamente", "Solo cuando se acuerde"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer un usuario si olvida su contraseña?",
            options: ["Usar cualquier otra", "Contactar a sistemas", "Intentar adivinarla", "Usar la computadora de otro"],
            correct: 1
        },
        {
            question: "¿Cuáles son las medidas básicas de seguridad informática?",
            options: ["Solo antivirus", "Antivirus y firewall", "Antivirus, firewall, actualizaciones y contraseñas seguras", "Ninguna"],
            correct: 2
        },
        {
            question: "¿Qué debe reportarse inmediatamente a sistemas?",
            options: ["Solo cuando no funciona nada", "Cualquier falla o comportamiento extraño", "Solo virus", "Solo cuando se descompone la computadora"],
            correct: 1
        },
        {
            question: "¿Quién puede instalar software en las computadoras?",
            options: ["Cualquier usuario", "Solo sistemas", "Solo gerentes", "Nadie"],
            correct: 1
        },
        {
            question: "¿Cómo deben manejarse las actualizaciones del sistema?",
            options: ["Nunca actualizar", "Automáticamente", "Programadas y supervisadas", "Solo cuando falle"],
            correct: 2
        },
        {
            question: "¿Qué información debe documentarse en cada soporte técnico?",
            options: ["Nada", "Solo el problema", "Problema, solución y tiempo", "Solo la solución"],
            correct: 2
        },
        {
            question: "¿Cuál es el procedimiento para solicitar nuevo equipo?",
            options: ["Tomarlo directamente", "Solicitud formal justificada", "Pedirlo verbalmente", "No se puede solicitar"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer el usuario antes de reportar una falla?",
            options: ["Nada", "Reiniciar el equipo", "Verificar conexiones básicas", "Todas las anteriores"],
            correct: 3
        }
    ],
    "Taller": [
        {
            question: "¿Cuál es la prioridad en el taller?",
            options: ["Velocidad", "Seguridad", "Ahorro", "Apariencia"],
            correct: 1
        },
        {
            question: "¿Qué debe revisarse antes de cualquier reparación?",
            options: ["Solo el problema reportado", "Sistema completo de seguridad", "Solo lo visible", "Nada"],
            correct: 1
        },
        {
            question: "¿Cuándo debe usarse equipo de protección personal?",
            options: ["Solo en trabajos peligrosos", "Siempre", "Solo si hay supervisión", "Nunca"],
            correct: 1
        },
        {
            question: "¿Qué documentación debe generarse por cada servicio?",
            options: ["Ninguna", "Solo la factura", "Orden de trabajo detallada", "Solo lista de refacciones"],
            correct: 2
        },
        {
            question: "¿Cómo deben almacenarse las refacciones?",
            options: ["En cualquier lugar", "Organizadas y etiquetadas", "Solo las importantes", "No importa"],
            correct: 1
        },
        {
            question: "¿Qué debe hacerse con las refacciones usadas?",
            options: ["Tirarlas", "Clasificarlas para disposición adecuada", "Reutilizarlas siempre", "Venderlas"],
            correct: 1
        },
        {
            question: "¿Cuándo debe reportarse un accidente en el taller?",
            options: ["Solo si es grave", "Inmediatamente", "Al final del día", "Solo si hay heridos"],
            correct: 1
        },
        {
            question: "¿Qué herramientas pueden usar los técnicos?",
            options: ["Cualquiera", "Solo las asignadas y en buen estado", "Las que encuentren", "Solo las nuevas"],
            correct: 1
        },
        {
            question: "¿Cómo debe manejarse un fluido derramado?",
            options: ["Dejarlo secar", "Limpiarlo inmediatamente con procedimiento seguro", "Cubrirlo", "Ignorarlo"],
            correct: 1
        },
        {
            question: "¿Qué debe verificarse al entregar un vehículo reparado?",
            options: ["Solo que encienda", "Funcionamiento completo y seguridad", "Solo el problema reparado", "Nada"],
            correct: 1
        }
    ],
    "Almacen": [
        {
            question: "¿Cuál es el método recomendado para organizar el inventario?",
            options: ["Por tamaño", "Por color", "Por clasificación y rotación", "Al azar"],
            correct: 2
        },
        {
            question: "¿Qué significa PEPS en manejo de inventarios?",
            options: ["Primeras Entradas, Primeras Salidas", "Últimas Entradas, Primeras Salidas", "Primeras Entradas, Últimas Salidas", "No significa nada"],
            correct: 0
        },
        {
            question: "¿Con qué frecuencia debe hacerse inventario físico?",
            options: ["Nunca", "Una vez al año", "Periódicamente según política", "Solo cuando falte algo"],
            correct: 2
        },
        {
            question: "¿Qué documento autoriza la salida de materiales?",
            options: ["Palabra verbal", "Requisición autorizada", "Cualquier papel", "No se necesita"],
            correct: 1
        },
        {
            question: "¿Cómo deben almacenarse materiales peligrosos?",
            options: ["Con los demás", "En área especial señalizada", "En cualquier lugar", "No se pueden almacenar"],
            correct: 1
        },
        {
            question: "¿Qué información debe registrarse en cada movimiento?",
            options: ["Solo cantidad", "Fecha, cantidad y responsable", "Solo el material", "Nada"],
            correct: 1
        },
        {
            question: "¿Cuál es el stock mínimo recomendado?",
            options: ["Cero", "El que permita operación continua", "Todo lo posible", "No hay mínimo"],
            correct: 1
        },
        {
            question: "¿Qué debe hacerse con material dañado?",
            options: ["Usarlo igual", "Separarlo y reportarlo", "Tirarlo", "Venderlo"],
            correct: 1
        },
        {
            question: "¿Quién puede acceder al almacén?",
            options: ["Cualquiera", "Solo personal autorizado", "Solo gerentes", "Solo el almacenista"],
            correct: 1
        },
        {
            question: "¿Cómo debe controlarse la temperatura y humedad?",
            options: ["No importa", "Según requerimientos del material", "Siempre fría", "Siempre caliente"],
            correct: 1
        }
    ],
    "Unidad de verificación": [
        {
            question: "¿Qué es una unidad de verificación vehicular?",
            options: ["Un taller", "Organismo acreditado para verificar emisiones", "Una gasolinera", "Un autolavado"],
            correct: 1
        },
        {
            question: "¿Cada cuánto deben verificarse los vehículos?",
            options: ["Cada mes", "Cada 6 meses", "Según la normatividad local", "Nunca"],
            correct: 2
        },
        {
            question: "¿Qué se verifica en la prueba de emisiones?",
            options: ["Solo humo", "Gases contaminantes", "Solo ruido", "Color del escape"],
            correct: 1
        },
        {
            question: "¿Qué documentos requiere la verificación?",
            options: ["Solo licencia", "Tarjeta de circulación y póliza vigente", "Solo INE", "Ninguno"],
            correct: 1
        },
        {
            question: "¿Qué pasa si un vehículo no aprueba la verificación?",
            options: ["Nada", "No puede circular", "Solo una multa", "Se decomisa"],
            correct: 1
        },
        {
            question: "¿Cuál es la multa por circular sin verificación vigente?",
            options: ["No hay multa", "Varía según municipio", "$500", "$1000"],
            correct: 1
        },
        {
            question: "¿Qué tipo de combustible afecta las emisiones?",
            options: ["Ninguno", "La calidad del combustible", "Solo diesel", "Solo gasolina"],
            correct: 1
        },
        {
            question: "¿Pueden verificarse vehículos modificados?",
            options: ["Siempre", "Nunca", "Solo si cumplen normatividad", "Solo los nuevos"],
            correct: 2
        },
        {
            question: "¿Qué vigencia tiene el certificado de verificación?",
            options: ["1 mes", "6 meses", "Según normatividad local", "1 año"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer el conductor durante la verificación?",
            options: ["Irse", "Permanecer presente", "Esperar afuera", "No importa"],
            correct: 1
        }
    ],
    "Operadores": [
        {
            question: "¿Cuál es la licencia mínima para conducir vehículos de transporte?",
            options: ["Automovilista", "Chofer", "Según el tipo de vehículo", "Cualquiera"],
            correct: 2
        },
        {
            question: "¿Qué debe revisar el operador antes de iniciar el viaje?",
            options: ["Solo combustible", "Solo llantas", "Inspección completa del vehículo", "Nada"],
            correct: 2
        },
        {
            question: "¿Cuál es la actitud correcta hacia los pasajeros/clientes?",
            options: ["Indiferente", "Profesional y cortés", "Autoritaria", "Como amigos"],
            correct: 1
        },
        {
            question: "¿Qué debe hacer si detecta una falla mecánica?",
            options: ["Continuar", "Detenerse en lugar seguro", "Acelerar", "Ignorarla"],
            correct: 1
        },
        {
            question: "¿Cuántas horas máximo puede conducir sin descanso?",
            options: ["Sin límite", "4 horas", "8 horas", "Según reglamento"],
            correct: 3
        },
        {
            question: "¿Qué documentos debe portar siempre?",
            options: ["Solo licencia", "Licencia y tarjeta de circulación", "Todos los documentos del vehículo", "Ninguno"],
            correct: 2
        },
        {
            question: "¿Cómo debe reportar incidentes?",
            options: ["No reportar", "Solo los graves", "Inmediatamente todos", "Al final del día"],
            correct: 2
        },
        {
            question: "¿Qué debe hacer en caso de accidente?",
            options: ["Huir", "Señalizar y llamar emergencias", "Mover vehículos", "Discutir"],
            correct: 1
        },
        {
            question: "¿Cuál es el límite de velocidad en zona urbana?",
            options: ["40 km/h", "50 km/h", "60 km/h", "Según señalamiento"],
            correct: 3
        },
        {
            question: "¿Qué debe hacer si un pasajero se comporta inadecuadamente?",
            options: ["Ignorarlo", "Discutir", "Aplicar protocolo de seguridad", "Bajarlo inmediatamente"],
            correct: 2
        }
    ]
};

// Inicializar la aplicación
document.getElementById('startForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showInstructions();
});

// Manejar subida de foto

function showInstructions() {
    // Guardar datos del formulario
    examData.studentName = document.getElementById('studentName').value;
    examData.instructorName = document.getElementById('instructorName').value;
    examData.examDate = document.getElementById('examDate').value;
    examData.topic = document.getElementById('topic').value;
    examData.currentQuestion = 0;
    examData.answers = [];
    examData.score = 0;

    // Cambiar a pantalla de instrucciones
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('instructionScreen').classList.remove('hidden');

    // Mostrar tema seleccionado
    document.getElementById('selectedTopic').textContent = examData.topic;
}

function startExamFromInstructions() {
    // Cambiar a pantalla de examen
    document.getElementById('instructionScreen').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    // Cargar primera pregunta
    loadQuestion();
}

function loadQuestion() {
    const questionNum = examData.currentQuestion;
    const topicQuestions = questionsByTopic[examData.topic];
    const question = topicQuestions[questionNum];

    document.getElementById('currentQuestion').textContent = questionNum + 1;

    const container = document.getElementById('questionContainer');
    container.innerHTML = `
        <div class="question">
            <h3>Pregunta ${questionNum + 1}: ${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        <input type="radio" name="answer" value="${index}" id="option${index}">
                        <label for="option${index}">${option}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Actualizar barra de progreso
    const progress = ((questionNum + 1) / 10) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Mostrar/ocultar botones
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    if (questionNum === 9) { // 10 preguntas (0-9)
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }

    // Deshabilitar botón hasta seleccionar respuesta
    nextBtn.disabled = true;
    finishBtn.disabled = true;
}

function selectOption(index) {
    // Quitar selección anterior
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    // Agregar selección actual
    const selectedOption = document.querySelectorAll('.option')[index];
    selectedOption.classList.add('selected');

    // Marcar radio button
    document.getElementById(`option${index}`).checked = true;

    // Habilitar botón siguiente
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('finishBtn').disabled = false;

    // Guardar respuesta
    examData.answers[examData.currentQuestion] = index;
}

function nextQuestion() {
    examData.currentQuestion++;
    loadQuestion();
}

function finishExam() {
    // Calcular puntuación
    examData.score = 0;
    const topicQuestions = questionsByTopic[examData.topic];
    for (let i = 0; i < topicQuestions.length; i++) {
        if (examData.answers[i] === topicQuestions[i].correct) {
            examData.score++;
        }
    }

    // Convertir a calificación sobre 10
    const total = topicQuestions.length;
    examData.score = (examData.score / total) * 10;

    // Enviar resultado a PHP
    fetch("guardar_resultado.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: examData.studentName,
            instructor: examData.instructorName,
            tema: examData.topic,
            calificacion: examData.score
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "ok") {
                console.log("✅ Resultado guardado correctamente");
            } else {
                console.error("❌ Error al guardar:", data.message);
            }
        });

    // Mostrar resultados al usuario
    showResults();
}


function showResults() {
    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');

    const passed = examData.score >= 8; // Cambio: ahora necesita 8 de 10
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const certificateContainer = document.getElementById('certificateContainer');

    if (passed) {
        resultIcon.innerHTML = '<div class="success-icon">🎉</div>';
        resultTitle.textContent = '¡Felicitaciones!';
        resultMessage.textContent = `Has aprobado el examen con ${examData.score} de 10 respuestas correctas.`;

        // Mostrar certificado
        certificateContainer.classList.remove('hidden');
        generateCertificate();
    } else {
        resultIcon.innerHTML = '<div class="fail-icon">❌</div>';
        resultTitle.textContent = 'Examen no aprobado';
        resultMessage.textContent = `Obtuviste ${examData.score} de 10 respuestas correctas. Necesitas al menos 8 para aprobar.`;
        certificateContainer.classList.add('hidden');
    }
}

function generateCertificate() {
    // Tomar la fecha del formulario (o hoy si viene vacía)
    const d = examData.examDate
        ? new Date(examData.examDate + 'T00:00:00')
        : new Date();


    // Formato largo en español para la línea inferior
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const lineaFecha = `Allende Nuevo León, a ${d.getDate()} de ${meses[d.getMonth()]} del ${d.getFullYear()}`;

    // Rellenar campos visibles del nuevo diseño
    const studentEl = document.getElementById('certStudentName');
    const topicEl = document.getElementById('certTopic');
    const participantEl = document.getElementById('certParticipantSign');
    const firmEl = document.getElementById('certInstructorSign');
    const dateLinea = document.getElementById('certDateLinea'); // <- línea inferior

    if (studentEl) studentEl.textContent = examData.studentName || '';
    if (topicEl) topicEl.textContent = examData.topic || '';
    if (participantEl) participantEl.textContent = examData.studentName || '';
    if (firmEl) firmEl.textContent = examData.instructorName || '';
    if (dateLinea) dateLinea.textContent = lineaFecha;


    // (Compat) si aún existen estos IDs en tu HTML anterior, los rellenamos para evitar errores:
    const oldInstructor = document.getElementById('certInstructor');
    const oldDate = document.getElementById('certDate');
    const oldScore = document.getElementById('certScore');

    if (oldInstructor) oldInstructor.textContent = examData.instructorName || '';
    if (oldDate) oldDate.textContent = d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    if (oldScore) oldScore.textContent = `${Math.round(examData.score * 10) / 10}/10 (${Math.round((examData.score / 10) * 100)}%)`;
}


async function downloadCertificate() {
    const cert = document.getElementById('certificate');

    // Serializar el certificado a string
    const serialized = new XMLSerializer().serializeToString(cert);

    // Crear SVG que contiene el DOM como foreignObject
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${cert.offsetWidth}" height="${cert.offsetHeight}">
            <foreignObject width="100%" height="100%">
                ${serialized}
            </foreignObject>
        </svg>
    `;

    // Convertir a Blob
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    // Cargar imagen desde SVG
    const img = new Image();
    img.onload = async () => {
        // Crear canvas y dibujar imagen
        const canvas = document.createElement('canvas');
        canvas.width = cert.offsetWidth * 2;   // aumentar resolución
        canvas.height = cert.offsetHeight * 2;
        const ctx = canvas.getContext('2d');
        ctx.scale(2, 2);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        // Convertir a PNG
        const imgData = canvas.toDataURL('image/png');

        // Generar PDF con jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('landscape', 'pt', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = canvas.height * (imgWidth / canvas.width);
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', 0, y, imgWidth, imgHeight);
        pdf.save(`certificado_${examData.studentName}.pdf`);
    };

    img.src = url;
}





function printCertificate() {
    const cert = document.getElementById('certificate');

    html2canvas(cert, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
          <html>
          <head><title>Imprimir certificado</title></head>
          <body style="margin:0; padding:0; text-align:center;">
            <img src="${imgData}" style="max-width:100%;"/>
            <script>
              window.onload = function() {
                window.print();
                window.onafterprint = function(){ window.close(); };
              };
            <\/script>
          </body>
          </html>
        `);
        printWindow.document.close();
    });
}

function restartExam() {
    // Reiniciar datos
    examData = {
        studentName: '',
        instructorName: '',
        examDate: '',
        topic: '',
        answers: [],
        currentQuestion: 0,
        score: 0
    };

    // Limpiar formulario
    document.getElementById('startForm').reset();
    document.querySelector('.upload-text').innerHTML = `
        <span class="d-block">Haga clic para subir su fotografía</span>
        <small>Formatos: JPG, PNG (máx. 5MB)</small>
    `;

    // Volver a pantalla de inicio
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
}

function exitExam() {
    if (confirm('¿Está seguro que desea salir del examen? Se perderá todo el progreso.')) {
        window.close();
        // Si no se puede cerrar la ventana, redirigir o recargar
        if (!window.closed) {
            window.location.reload();
        }
    }
}

fetch("guardar_resultado.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: examData.studentName,
        instructor: examData.instructorName,
        tema: examData.topic,
        calificacion: examData.score
    })
})
    .then(res => res.json())
    .then(data => {
        if (data.status === "ok") {
            console.log("Resultado guardado correctamente.");
        } else {
            console.error("Error al guardar:", data.message);
        }
    });
