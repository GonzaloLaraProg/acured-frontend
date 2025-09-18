// src/data/servicesContent.tsx
import React from "react";

export const servicesContent: Record<string, { title: string; content: JSX.Element }> = {
  "medicina-china": {
    title: "Medicina Tradicional China",
    content: (
      <div className="space-y-4">
        <p>
          La Medicina Tradicional China (MTC) es un sistema médico completo y holístico que se ha desarrollado a lo largo de más de 3.000 años en China. A diferencia de la medicina occidental, que se centra en el tratamiento de síntomas específicos, la MTC busca entender y tratar las causas subyacentes de las enfermedades, promoviendo el equilibrio y la armonía en el cuerpo, la mente y el entorno. 
        </p>
        <p>
            Se basa en principios fisiológicos y teóricos como el Qi (concebido en este contexto como dinámica vital del organismo) el equilibrio entre el Yin y el Yang, la Teoría de las Cinco Fases y la Teoría de Canales. Estos conceptos explican cómo el cuerpo funciona a través de los canales que conectan órganos y tejidos, y cómo la salud depende del flujo armonioso del Qi. Además, considera las emociones, los factores externos (ambientales) y la interacción entre los órganos como claves para el bienestar.
        </p>
        <p>
            La MTC incluye una variedad de prácticas terapéuticas:
        </p>
        <p>
            1.	Acupuntura
        </p>
        <p>
            Inserción de agujas finas en zonas del cuerpo para regular funciones internas y aliviar desequilibrios.
        </p>
        <p>   
            2.	Moxibustión
        </p>
        <p>
            Aplicación de calor con artemisa (moxa) sobre zonas clave para estimular la circulación y fortalecer el organismo.
        </p>
        <p>    
            3.	Ventosas
        </p>
        <p>
            Succión terapéutica con copas de vidrio, plástico, silicona o bambú para liberar tensiones y activar el flujo corporal.
        </p>
        <p>    
            4.	Auriculoterapia
        </p>
        <p>
            Estimulación de puntos reflejos en la oreja relacionados con órganos y funciones corporales.
        </p>
        <p>    
            5.	Masaje Tuina (Masaje Terapéutico Chino)
        </p>
            Masaje terapéutico que combina presión, estiramiento y movimiento para mejorar la circulación y aliviar molestias.
        <p>    
            6.	Fitoterapia china
        </p>
        <p>
            Uso de combinaciones de hierbas medicinales para apoyar la salud y tratar distintas alteraciones internas.
        </p>
        <p>   
            7.	Dietoterapia china
        </p>
        <p>
            Selección de alimentos según sus efectos en el cuerpo para apoyar su funcionamiento natural.
        </p>
        <p>    
            8.	Sangría terapéutica
        </p>
        <p>
            Extracción controlada de sangre en zonas específicas para eliminar estancamientos y liberar excesos internos.
        </p>   
        <p> 
            9.	Aguja de fuego
            </p>
            <p>
            Aplicación rápida de una aguja previamente calentada para activar zonas bloqueadas o dolorosas.
            </p>
            <p>
            10.	Gua Sha
            </p>
            <p>
            Raspado suave de la piel con herramientas lisas para mejorar la circulación y reducir tensiones.
            </p>
            <p>
            11.	Qigong
            </p>
            <p>
            Práctica que combina respiración, movimiento y atención consciente para promover la armonía interna.
            </p>
            <p>
            Estas técnicas se utilizan tanto para prevenir como para tratar enfermedades, y su objetivo es restaurar el flujo adecuado de Qi en los canales y órganos con el fin de promover su correcto funcionamiento.
            La elección de cada técnica se basa en el diagnóstico chino determinado por cada terapeuta, escogiendo la o las que sean más efectivas para cada caso.
            </p>
            <p>
            ¿Quieres saber más acerca de cada técnica? Encuentra mayor información haciendo click sobre el nombre de cada una de ellas. 
            </p>
       
        <p>
          Su propósito no solo es tratar enfermedades, sino también prevenirlas, fortaleciendo al
          organismo y promoviendo la armonía con el entorno.
        </p>
      </div>
    ),
  },

  acupuntura: {
    title: "Acupuntura",
    content: (
      <div className="fold inter space-y-4">
        <p className="font-bold">
         Un poco de historia…
        </p>
        <p>
        Los orígenes de la acupuntura se remontan a la antigüedad, aunque es difícil precisar exactamente cuándo surgió como práctica médica estructurada. Evidencias arqueológicas indican que durante el período Neolítico (alrededor del 5.000 a.C.) ya se utilizaban herramientas de piedra afiladas, conocidas como bian shi, empleadas probablemente con fines terapéuticos. Sin embargo, estas prácticas deben entenderse como antecedentes rudimentarios, y no como acupuntura en el sentido moderno del término.
        </p>
        <p>
        La primera sistematización teórica y clínica de la acupuntura aparece en el Huangdi Neijing (Clásico Interno del Emperador Amarillo), una obra fundamental compilada entre los siglos II a.C. y II d.C. Dividido en dos secciones —Suwen (Preguntas Simples) y Lingshu (Pivote Espiritual)—, este texto establece los principios del funcionamiento del cuerpo, la red de canales, y el uso de la acupuntura como método terapéutico.
        </p>
        <p>
        Fue durante la dinastía Han (206 a.C.–220 d.C.) cuando la acupuntura se consolidó como una disciplina médica con fundamentos teóricos, técnicas específicas y formación profesional. A partir de allí, se expandió progresivamente a otras regiones de Asia y, ya en el siglo XX, comenzó a difundirse en Occidente, donde fue reconocida como una herramienta terapéutica relevante dentro de los sistemas de salud integrativos.
        </p>
        <p className="font-bold">
        ¿Qué es la acupuntura?
        </p>
        <p>
        La acupuntura es una técnica terapéutica milenaria desarrollada en el marco de la Medicina China. Consiste en la inserción precisa de agujas finas en puntos específicos del cuerpo —conocidos como puntos de acupuntura— ubicados a lo largo de una red de canales que recorren el tejido conectivo.
        </p>
        <p>
        Según la Medicina China, estos canales permiten la circulación del Qi (concepto que representa la dinámica funcional del cuerpo) y de sustancias vitales como la Sangre y los líquidos orgánicos. Esta red actúa como un sistema de regulación interna que conecta los órganos entre sí y con el entorno, permitiendo respuestas adaptativas al medio ambiente. Cuando esa circulación se ve alterada, aparecen manifestaciones de enfermedad.
        </p>
        <p className="font-semibold">
        Desde esta perspectiva, la acupuntura busca:
        </p>
        <div className="space-y-1 pl-5">
            <p>• Regular el movimiento de Qi y Sangre.</p>
            <p>• Restaurar la armonía entre el Yin y el Yang.</p>
            <p>• Tonificar deficiencias y dispersar excesos.</p>
            <p>• Coordinar las funciones fisiológicas del organismo.</p>
        </div>

            <p className="font-semibold">

        Desde el enfoque biomédico, la acupuntura estimula terminaciones nerviosas, promoviendo la liberación de neurotransmisores como endorfinas, serotonina y dopamina, lo que contribuye al alivio del dolor y la regulación emocional. Además:
        </p>
        <div className="space-y-1 pl-5">
        <p>• Modula la respuesta inflamatoria a nivel local y sistémico.</p>
        <p>• Mejora la circulación sanguínea y produce vasodilatación.</p>
        <p>• Influye en ejes neuroendocrinos y procesos inmunológicos.</p>
        </div>

            <p>

        Gracias a esta doble aproximación —tradicional y científica—, la acupuntura se ha consolidado como una terapia integrativa y eficaz para abordar una amplia gama de condiciones médicas, tanto agudas como crónicas.
        </p>
        <p className="font-bold">
        ¿Qué condiciones pueden ser tratadas con acupuntura?
        </p>
        <p>

        La acupuntura es eficaz para una amplia gama de condiciones agudas y crónicas. Reconocida por la Organización Mundial de la Salud como tratamiento válido para más de 100 enfermedades, ayuda a aliviar el dolor, regular funciones fisiológicas y apoyar los procesos de recuperación, sin efectos secundarios significativos.
        </p>
        <p>
        Su enfoque es integrador: actúa sobre los síntomas, pero también sobre los desajustes funcionales que los generan, considerando el cuerpo, la mente y el entorno como un sistema interrelacionado.
        </p>
        <p>
        A continuación te mostramos un listado de condiciones que pueden ser tratadas con acupuntura:
        </p>
        <p className="font-semibold">
        Sistema nervioso y salud mental
        </p>
       <div className="space-y-1 pl-5">
        <p>• Dolor de cabeza y migrañas</p>
        <p>• Neuralgias (ciática, trigémino, intercostal, etc)</p>
        <p>• Neuropatías periféricas (diabéticas, postquirúrgicas, túnel carpiano, etc)</p>
        <p>• Secuelas de ACV (parálisis facial, hemiplejía, etc)</p>
        <p>• Vértigo y mareos</p>
        <p>• Tinnitus</p>
        <p>• Insomnio y trastornos del sueño</p>
        <p>• Ansiedad, estrés crónico, depresión</p>
        <p>• Crisis de pánico</p>
        <p>• Trastorno de estrés postraumático (TEPT)</p>
        <p>• Fatiga crónica</p>
        </div>

            <p className="font-semibold">

        Sistema musculoesquelético y dolor
        </p>
       <div className="space-y-1 pl-5">
        <p>• Dolor agudo y crónico (lumbalgia, cervicalgia, dolor articular, etc)</p>
        <p>• Contracturas, espasmos musculares</p>
        <p>• Tendinitis, bursitis, esguinces</p>
        <p>• Artritis y artrosis (manos, rodillas, caderas, columna, etc)</p>
        <p>• Reumatismo</p>
        <p>• Fibromialgia</p>
        </div>

        <div className="">

  <div>
    <p className="font-semibold">Sistema respiratorio e inmunológico</p>
    <div className="space-y-1 pl-5">
      <p>• Asma bronquial</p>
      <p>• Bronquitis crónica</p>
      <p>• Rinitis alérgica, alergia estacional</p>
      <p>• Sinusitis</p>
      <p>• Resfriados recurrentes</p>
      <p>• Problemas inmunológicos</p>
    </div>
  </div>

  <div>
    <p className="font-semibold ">Sistema cardiovascular y circulatorio</p>
    <div className="space-y-1 pl-5">
      <p>• Hipertensión</p>
      <p>• Palpitaciones (sin causa orgánica)</p>
      <p>• Mala circulación periférica (manos y pies fríos)</p>
    </div>
  </div>


  <div>
    <p className="font-semibold ">Sistema digestivo</p>
    <div className="space-y-1 pl-5">
      <p>• Gastritis y reflujo gastroesofágico</p>
      <p>• Colon irritable</p>
      <p>• Estreñimiento o diarrea funcional</p>
      <p>• Náuseas y vómitos (quimioterapia, postoperatorios)</p>
      <p>• Dolor abdominal</p>
      <p>• Hemorroides</p>
    </div>
  </div>

 
  <div>
    <p className="font-semibold">Sistema endocrino y metabólico</p>
    <div className="space-y-1 pl-5">
      <p>• Hipotiroidismo e hipertiroidismo</p>
      <p>• Diabetes tipo 2</p>
      <p>• Obesidad (como complemento a dieta y ejercicio)</p>
    </div>
  </div>

  <div>
    <p className="font-semibold ">Sistema ginecológico y urogenital</p>
    <div className="space-y-1 pl-5">
      <p>• Dolor menstrual</p>
      <p>• Síndrome premenstrual</p>
      <p>• Síntomas de menopausia (bochornos, sudoración, insomnio, nerviosismo)</p>
      <p>• Infertilidad (femenina y masculina, de origen funcional)</p>
      <p>• Infecciones urinarias recurrentes</p>
      <p>• Micosis genitales</p>
      <p>• Disfunción eréctil de origen funcional</p>
      <p>• Prostatitis crónica</p>
    </div>
  </div>


  <div>
    <p className="font-semibold ">Sistema dermatológico</p>
    <div className="space-y-1 pl-5">
      <p>• Dermatitis</p>
      <p>• Psoriasis</p>
      <p>• Acné (especialmente por desregulación hormonal)</p>
      <p>• Prurito crónico</p>
    </div>
  </div>


  <div>
    <p className="font-semibold ">Sistema ocular</p>
    <div className="space-y-1 pl-5">
      <p>• Ojos secos</p>
      <p>• Glaucoma (como apoyo complementario)</p>
    </div>
  </div>

  
  <div>
    <p className="font-semibold">Cuidados paliativos y soporte oncológico</p>
    <div className="space-y-1 pl-5">
      <p>• Náuseas por quimioterapia</p>
      <p>• Dolor oncológico</p>
      <p>• Neuropatías inducidas por quimioterapia</p>
      <p>• Fatiga asociada al cáncer</p>
    </div>
  </div>

 <br />
    <p >
        ¿No ves tu diagnóstico en la lista?

    </p>

</div>

        <p>
        La acupuntura se adapta a las características de cada persona y puede ofrecer beneficios incluso en casos complejos. ¡Consulta con tu terapeuta registrado para una evaluación individual y personalizada!

        </p>

      </div>
    ),
  },

  moxibustion: {
    title: "Moxibustión",
    content: (
      <div className="space-y-4">
        <p>
          La moxibustión es una técnica que aplica calor mediante la combustión de la hierba
          Artemisa sobre puntos energéticos del cuerpo.
        </p>
        <p>
          Se emplea para mejorar la circulación, estimular la energía vital, fortalecer el sistema
          inmunológico y tratar problemas como resfríos, dolores articulares y fatiga crónica.
        </p>
      </div>
    ),
  },

  ventosas: {
    title: "Ventosas",
    content: (
      <div className="space-y-4">
        <p>
          Esta técnica consiste en colocar vasos de vidrio, bambú o plástico en la piel, creando
          succión para estimular la circulación sanguínea y energética.
        </p>
        <p>
          Es útil para tratar dolores musculares, contracturas, problemas respiratorios, mejorar la
          circulación y eliminar toxinas del organismo.
        </p>
      </div>
    ),
  },

  "masaje-tuina": {
    title: "Masaje Tuina",
    content: (
      <div className="space-y-4">
        <p>
          El masaje Tuina es una rama de la MTC que combina técnicas de presión, estiramiento y
          movilización de articulaciones.
        </p>
        <p>
          Está indicado para tratar dolores musculares, lesiones, problemas articulares, insomnio,
          estrés y alteraciones digestivas.
        </p>
      </div>
    ),
  },

  auriculoterapia: {
    title: "Auriculoterapia",
    content: (
      <div className="space-y-4">
        <p>
          Esta técnica utiliza la estimulación de puntos en la oreja que están relacionados con
          diferentes órganos y funciones del cuerpo.
        </p>
        <p>
          Se aplica para el manejo del dolor, control del apetito, adicciones, ansiedad, depresión y
          alteraciones hormonales.
        </p>
      </div>
    ),
  },

  fitoterapia: {
    title: "Fitoterapia",
    content: (
      <div className="space-y-4">
        <p>
          La fitoterapia china utiliza fórmulas de hierbas medicinales, seleccionadas según el
          diagnóstico energético del paciente.
        </p>
        <p>
          Sirve para tratar enfermedades agudas y crónicas, fortalecer el sistema inmune, regular el
          metabolismo y equilibrar las emociones.
        </p>
      </div>
    ),
  },

  dietoterapia: {
    title: "Dietoterapia",
    content: (
      <div className="space-y-4">
        <p>
          La dietoterapia se basa en la selección y combinación de alimentos según sus propiedades
          energéticas, sabores y naturaleza.
        </p>
        <p>
          Su objetivo es prevenir y tratar enfermedades, mejorar la digestión, fortalecer órganos y
          mantener el equilibrio interno.
        </p>
      </div>
    ),
  },

  "sangria-terapeutica": {
    title: "Sangría terapéutica",
    content: (
      <div className="space-y-4">
        <p>
          La sangría terapéutica es una técnica que consiste en la extracción controlada de pequeñas
          cantidades de sangre en puntos específicos.
        </p>
        <p>
          Se utiliza para eliminar calor excesivo, mejorar la circulación, reducir inflamaciones y
          tratar cefaleas, hipertensión o congestiones.
        </p>
      </div>
    ),
  },

  "agua-de-fuego": {
    title: "Agua de fuego",
    content: (
      <div className="space-y-4">
        <p>
          La técnica del agua de fuego utiliza agujas calientes que se aplican en zonas específicas
          del cuerpo para desbloquear la energía.
        </p>
        <p>
          Es útil para tratar dolores crónicos, rigidez articular, problemas musculares y algunas
          patologías de origen energético.
        </p>
      </div>
    ),
  },

  "gua-sha": {
    title: "Gua Sha",
    content: (
      <div className="space-y-4">
        <p>
          El Gua Sha consiste en raspar suavemente la piel con una herramienta lisa de jade, cuerno o
          metal, para mejorar la circulación.
        </p>
        <p>
          Se aplica para liberar tensiones musculares, tratar resfríos, mejorar la circulación
          sanguínea y linfática y desintoxicar el cuerpo.
        </p>
      </div>
    ),
  },

  qigong: {
    title: "Qigong",
    content: (
      <div className="space-y-4">
        <p>
          El Qigong es una práctica que combina movimientos corporales, respiración consciente y
          meditación.
        </p>
        <p>
          Se utiliza para fortalecer el cuerpo, mejorar la concentración, reducir el estrés y
          mantener el equilibrio físico y mental.
        </p>
      </div>
    ),
  },
};
