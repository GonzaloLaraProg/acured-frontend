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
        <p className="font-semibold">
            La MTC incluye una variedad de prácticas terapéuticas:
        </p>
        <div className="space-y-2 pl-2">
            <p>
                <span className="font-semibold">1. Acupuntura: </span>
                Inserción de agujas finas en zonas del cuerpo para regular funciones internas y aliviar desequilibrios.
            </p>
            <p>
                <span className="font-semibold">2. Moxibustión: </span>
                Aplicación de calor con artemisa (moxa) sobre zonas clave para estimular la circulación y fortalecer el organismo.
            </p>
            <p>
                <span className="font-semibold">3. Ventosas: </span>
                Succión terapéutica con copas de vidrio, plástico, silicona o bambú para liberar tensiones y activar el flujo corporal.
            </p>
            <p>
                <span className="font-semibold">4. Auriculoterapia: </span>
                Estimulación de puntos reflejos en la oreja relacionados con órganos y funciones corporales.
            </p>
            <p>
                <span className="font-semibold">5. Masaje Tuina (Masaje Terapéutico Chino): </span>
                Masaje terapéutico que combina presión, estiramiento y movimiento para mejorar la circulación y aliviar molestias.
            </p>
            <p>
                <span className="font-semibold">6. Fitoterapia china: </span>
                Uso de combinaciones de hierbas medicinales para apoyar la salud y tratar distintas alteraciones internas.
            </p>
            <p>
                <span className="font-semibold">7. Dietoterapia china: </span>
                Selección de alimentos según sus efectos en el cuerpo para apoyar su funcionamiento natural.
            </p>
            <p>
                <span className="font-semibold">8. Sangría terapéutica: </span>
                Extracción controlada de sangre en zonas específicas para eliminar estancamientos y liberar excesos internos.
            </p>
            <p>
                <span className="font-semibold">9. Aguja de fuego: </span>
                Aplicación rápida de una aguja previamente calentada para activar zonas bloqueadas o dolorosas.
            </p>
            <p>
                <span className="font-semibold">10. Gua Sha: </span>
                Raspado suave de la piel con herramientas lisas para mejorar la circulación y reducir tensiones.
            </p>
            <p>
                <span className="font-semibold">11. Qigong: </span>
                Práctica que combina respiración, movimiento y atención consciente para promover la armonía interna.
            </p>
            </div>

            <p>
            Estas técnicas se utilizan tanto para prevenir como para tratar enfermedades, y su objetivo es restaurar el flujo adecuado de Qi en los canales y órganos con el fin de promover su correcto funcionamiento.
            La elección de cada técnica se basa en el diagnóstico chino determinado por cada terapeuta, escogiendo la o las que sean más efectivas para cada caso.
            </p>
            <p className="font-bold">
            ¿Quieres saber más acerca de cada técnica? Encuentra mayor información haciendo click sobre el nombre de cada una de ellas. 
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

            <p className="font-semibold">Sistema respiratorio e inmunológico</p>


    
    <div className="space-y-1 pl-5">
      <p>• Asma bronquial</p>
      <p>• Bronquitis crónica</p>
      <p>• Rinitis alérgica, alergia estacional</p>
      <p>• Sinusitis</p>
      <p>• Resfriados recurrentes</p>
      <p>• Problemas inmunológicos</p>
    </div>



    <p className="font-semibold ">Sistema cardiovascular y circulatorio</p>
    <div className="space-y-1 pl-5">
      <p>• Hipertensión</p>
      <p>• Palpitaciones (sin causa orgánica)</p>
      <p>• Mala circulación periférica (manos y pies fríos)</p>
    </div>



    <p className="font-semibold ">Sistema digestivo</p>
    <div className="space-y-1 pl-5">
      <p>• Gastritis y reflujo gastroesofágico</p>
      <p>• Colon irritable</p>
      <p>• Estreñimiento o diarrea funcional</p>
      <p>• Náuseas y vómitos (quimioterapia, postoperatorios)</p>
      <p>• Dolor abdominal</p>
      <p>• Hemorroides</p>
    </div>


 
  
    <p className="font-semibold">Sistema endocrino y metabólico</p>
    <div className="space-y-1 pl-5">
      <p>• Hipotiroidismo e hipertiroidismo</p>
      <p>• Diabetes tipo 2</p>
      <p>• Obesidad (como complemento a dieta y ejercicio)</p>
    </div>
 


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




    <p className="font-semibold ">Sistema dermatológico</p>
    <div className="space-y-1 pl-5">
      <p>• Dermatitis</p>
      <p>• Psoriasis</p>
      <p>• Acné (especialmente por desregulación hormonal)</p>
      <p>• Prurito crónico</p>
    </div>




    <p className="font-semibold ">Sistema ocular</p>
    <div className="space-y-1 pl-5">
      <p>• Ojos secos</p>
      <p>• Glaucoma (como apoyo complementario)</p>
    </div>


  

    <p className="font-semibold">Cuidados paliativos y soporte oncológico</p>
    <div className="space-y-1 pl-5">
      <p>• Náuseas por quimioterapia</p>
      <p>• Dolor oncológico</p>
      <p>• Neuropatías inducidas por quimioterapia</p>
      <p>• Fatiga asociada al cáncer</p>
    </div>
 

 <br />
    <p className="font-bold">
        ¿No ves tu diagnóstico en la lista?

    </p>


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
         La moxibustión es una técnica de la Medicina Tradicional China que utiliza el calor generado por la combustión de una planta llamada Artemisia vulgaris, la cual se seca y se procesa en una forma conocida como moxa. 
Este calor se aplica sobre áreas del cuerpo para inducir efectos fisiológicos profundos: estimula la circulación sanguínea y linfática, favorece el transporte de oxígeno y nutrientes a los tejidos, alivia el dolor, reduce la inflamación y promueve la recuperación de tejidos dañados.
También se utiliza para tratar problemas digestivos, respiratorios, ginecológicos, musculoesqueléticos, y es conocida por su capacidad para reforzar el sistema inmunológico.
</p>
<p className="font-bold">
¿Para qué se utiliza?
</p>
<div className="space-y-2 pl-2">
  <p>
    <span className="font-semibold">1. Dolor y sistema musculoesquelético: </span>
    Lumbalgia, cervicalgia, artritis, artrosis, espasmos musculares, contracturas, tendinitis, bursitis, rigidez y dolor crónico.
  </p>

  <p>
    <span className="font-semibold">2. Circulación y recuperación de tejidos: </span>
    Mejora el flujo sanguíneo y linfático, favorece la reparación de tejidos tras lesiones y alivia la sensación de frío en extremidades.
  </p>

  <p>
    <span className="font-semibold">3. Trastornos digestivos: </span>
    Dolor abdominal, distensión, gastritis, diarrea crónica y constipación.
  </p>

  <p>
    <span className="font-semibold">4. Salud ginecológica y fertilidad: </span>
    Dolor menstrual, irregularidades del ciclo, síndrome premenstrual, endometriosis, ovario poliquístico, infertilidad funcional, prolapso uterino y baja líbido.
  </p>

  <p>
    <span className="font-semibold">5. Sistema genitourinario: </span>
    Cistitis recurrente, retención o incontinencia urinaria, disfunción eréctil y eyaculación precoz.
  </p>

  <p>
    <span className="font-semibold">6. Sistema respiratorio e inmunológico: </span>
    Asma, bronquitis crónica, rinitis, sinusitis, tos persistente, resfríos frecuentes y disminución de la respuesta inmunológica.
  </p>

  <p>
    <span className="font-semibold">7. Prevención y cuidado de la salud: </span>
    Se utiliza de forma preventiva para mantener las funciones fisiológicas estables y aumentar la resistencia frente a enfermedades recurrentes o cambios climáticos.
  </p>
</div>

<p>
Descubre el poder de la moxibustión con nuestros profesionales registrados. 
¡Agenda tu consulta en Acured y recibe un tratamiento personalizado!
 </p>
      </div>
    ),
  },

  ventosas: {
    title: "Ventosas",
    content: (
      <div className="space-y-4">
        <p className="font-bold">
          ¿Qué son las ventosas?
          </p>
          <p>

La terapia de ventosas, conocida en chino como “Bá Guàn” (拔罐) y en Occidente como “Cupping”, es una de las técnicas más antiguas y reconocidas de la Medicina Tradicional China.
Consiste en la aplicación de copas (generalmente de vidrio, bambú, plástico o silicona) sobre la piel, para crear un efecto de succión o vacío mediante la aplicación de fuego o sistemas de bombeo manual.
Este método estimula la circulación de sangre y Qi en el cuerpo, libera toxinas, alivia dolores, refuerza el sistema inmunológico, relaja y reduce el estrés.
</p>
<p>
Aunque en las últimas décadas ha ganado popularidad en el mundo occidental, su origen se remonta a una historia de miles de años y se han utilizado en diferentes culturas para aliviar dolores, mejorar el estado de la salud y tratar diversas enfermedades.
</p>
<p className="font-bold">
¿Cuáles son sus efectos?
</p>
<p>
Investigaciones modernas han demostrado que el efecto de succión genera cambios fisiológicos concretos:
</p>
<div className="space-y-2 pl-2">
  <p>
    <span className="font-semibold">- Hiperemia local:</span>
    La succión dilata los vasos sanguíneos, aumentando el flujo de sangre y oxígeno en la zona, lo que acelera la reparación de tejidos.
  </p>

  <p>
    <span className="font-semibold">- Activación del sistema linfático y efecto antiinflamatorio:</span>
    Favorece la eliminación de desechos metabólicos y reduce la inflamación crónica.
  </p>

  <p>
    <span className="font-semibold">- Liberación de endorfinas:</span>
    La presión sobre terminaciones nerviosas produce un efecto analgésico natural.
  </p>

  <p>
    <span className="font-semibold">- Modulación del sistema inmunológico:</span>
    Estudios sugieren que las ventosas incrementan la producción de células defensivas (como los linfocitos).
  </p>

  <p>
    <span className="font-semibold">- Liberación Miofascial: </span>
    Las ventosas generan un "estiramiento" mecánico de la fascia, rompiendo adherencias entre capas de tejido conectivo, mejorando la movilidad en casos de fibrosis post-lesión.
  </p>
</div>
<p className="font-bold">
¿Qué condiciones se pueden tratar con ventosas?
</p>
<div className="space-y-2 pl-2">
  <p>
    - Dolor musculoesquelético:
    Lumbalgia, ciática, tortícolis, cervicalgia, tendinitis, artritis, etc.
  </p>

  <p>
   - Trastornos respiratorios:
    Asma, bronquitis, resfriados
  </p>

  <p>
    - Problemas digestivos:  
    estreñimiento, dispepsia
  </p>

  <p>- Debilidad del sistema inmunológico</p>
  <p>- Retención de líquidos</p>
  <p>- Estrés</p>
  <p>- Ansiedad</p>
  <p>- Fatiga crónica</p>
  <p>- Insomnio</p>
  <p>- Migrañas y cefaleas tensionales</p>
  <p>- Celulitis y retención de líquidos</p>
</div>

<p className="">
Las ventosas son una terapia segura, no invasiva y con múltiples beneficios, avalada por siglos de experiencia en la Medicina Tradicional China. Si buscas una alternativa natural para aliviar dolores, mejorar tu circulación o reducir el estrés, esta técnica puede ser una excelente opción.
</p>
<p className="font-bold">
¿Te animas a probarla? ¡Consulta con un profesional en Acured y recibe un tratamiento totalmente personalizado!
</p>
      </div>
    ),
  },

  "masaje-tuina": {
    title: "Masaje Tuina",
    content: (
      <div className="space-y-4">
        <p>
        El Masaje Tuina es una rama de la Medicina Tradicional China que utiliza el masaje como medio terapéutico, operando directamente sobre el sistema de canales y colaterales, una compleja red que conecta la superficie corporal con los órganos internos. 
Comparte todos los postulados básicos de la Medicina China, tanto en fisiopatología como en diagnóstico. 
</p>
<p>
Esta técnica combina movimientos específicos con principios anatómicos y fisiológicos, utilizando maniobras precisas como presión, fricción, vibración, percusión, movilización y tracción, con el objetivo de estimular el flujo de Qi y sangre en los canales, regular los órganos, modular la función del sistema nervioso, activar  la circulación, reforzar la capacidad de resistencia del cuerpo contra enfermedades y promover la autorregulación del organismo.
</p>
<p className="font-semibold">
El masaje Tuina produce diversos efectos fisiológicos en el organismo: 
</p>
	
<div class="space-y-2 pl-2">
  <p>• Estimula la circulación periférica, mejorando el flujo sanguíneo.</p>
  <p>• Previene la estasis vascular (estancamiento de sangre) y acelera la velocidad circulatoria, favoreciendo el intercambio metabólico.</p>
  <p>• Induce la dilatación de los capilares, facilitando una mejor oxigenación de los tejidos.</p>
  <p>• Promueve la relajación muscular al mejorar el aporte de nutrientes y la eliminación de toxinas.</p>
  <p>• Nutre los nervios periféricos y reduce la sensibilidad al dolor.</p>
  <p>• Genera cambios biofísicos en la piel, estimulando la renovación celular.</p>
  <p>• Regula la actividad nerviosa, ayudando a aliviar espasmos y contracturas musculares.</p>
  <p>• Mejora la elasticidad cutánea y promueve la regeneración de las células de la piel.</p>
  <p>• Estimula la producción de líquido sinovial en las articulaciones, mejorando su lubricación y movilidad.</p>
  <p>• Aumenta el espacio interarticular, reduciendo la compresión entre vértebras.</p>
  <p>• Genera un efecto de aspiración en los discos vertebrales, aliviando la presión sobre las raíces nerviosas.</p>
  <p>• Mejora la circulación en la zona intervertebral, disminuyendo la inflamación y el dolor asociado.</p>
</div>


<p>
Se utiliza en un gran número de especialidades como reumatología, ginecología, traumatología, pediatría y medicina interna.
</p>
<p>
Dentro de las condiciones que pueden ser abordadas con masaje tuina, se encuentran: dolor agudo y crónico (lumbalgias, dorsalgias, cervicalgias, contracturas, esguinces, artrosis, tendinitis, etc), estrés, insomnio, ansiedad, bruxismo, cefaleas tensionales, neuralgias, alteraciones circulatorias, edemas, manos o pies fríos, estreñimiento, síndrome de colon irritable, dolor abdominal, bronquitis, asma, resfriados recurrentes, dolores menstruales, síntomas de menopausia, cólicos del lactante, trastornos digestivos y alteraciones del sueño en infantes y defensas bajas (sistema inmunológico), entre otros.
</p>
<p>
Esta técnica adapta sus maniobras según cada condición, trabajando siempre sobre los principios de la Medicina China para restablecer el equilibrio corporal.
</p>
<p className="font-bold">
¡Solicita una evaluación inicial con nuestros terapeutas registrados y descubre los increíbles beneficios que el Masaje Tuina tiene para ti!
</p>
      </div>
    ),
  },

  auriculoterapia: {
    title: "Auriculoterapia",
    content: (
      <div className="space-y-4">
        <p>

La auriculoterapia (耳针疗法 - ěr zhēn liáo fǎ) es una rama especializada de la acupuntura, que se enfoca exclusivamente en el pabellón auricular y se utiliza para influir en diversas funciones del organismo. 
</p>
<p>
Esta terapia se utiliza comúnmente para aliviar dolores agudos y crónicos (como migrañas o lumbalgias), reducir el estrés, mejorar trastornos digestivos y apoyar en el manejo de adicciones.
</p>
<p>
La técnica consiste en identificar los puntos reactivos en la oreja, ya sea mediante palpación, detección eléctrica u observación de cambios en la piel, y luego estimularlos mediante la inserción de agujas, presión manual con semillas o imanes, chinchetas intradérmicas, electroestimulación y, en algunos casos, moxibustión o láser de baja frecuencia. 
</p>
<p>
Desde el punto de vista de la Medicina China, la oreja representa un microsistema holográfico donde se proyecta todo el organismo, con puntos específicos conectados a órganos y funciones.
</p>
<p>
Desde una perspectiva científica, se ha observado que la oreja posee una densa red de terminaciones nerviosas conectadas al sistema nervioso central, lo que lo convierte en una zona de alta sensibilidad y capacidad modulatoria, permitiendo regular señales de dolor, funciones autonómicas y respuestas orgánicas. 
</p>
<p className="font-bold">
Si deseas experimentar los beneficios de la auriculoterapia u otras técnicas de la Medicina China, agenda una cita con nuestros terapeutas registrados. 
¡Tu bienestar comienza con un tratamiento seguro y personalizado!
</p>
      </div>
    ),
  },

  fitoterapia: {
    title: "Fitoterapia",
    content: (
      <div className="space-y-4">
        <p>
         La fitoterapia es una de las ramas más importantes de la Medicina Tradicional China (MTC), con una tradición que se remonta a más de 2.500 años de historia. 
</p>
<p>
Consiste en el uso de fórmulas de hierbas medicinales cuidadosamente elaboradas para restaurar el equilibrio del organismo, tratar diversas patologías y restablecer la salud.
</p>
<p>
A diferencia de la herbolaria occidental, que se enfoca en principios activos aislados, la fitoterapia china utiliza fórmulas combinadas que actúan en sinergia para armonizar el Qi, regular el Yin y el Yang, nutrir la sangre y los líquidos corporales, fortalecer los órganos, eliminar toxinas y eliminar factores patógenos.
</p>
<p>
Las fórmulas se preparan en distintas presentaciones: decocciones (té), polvos, cápsulas, tinturas, emplastos y extractos, adaptándose a las necesidades de cada paciente.
</p>
<p className="font-bold">
¿Para qué sirve?
</p>
La fitoterapia china es eficaz en el tratamiento de una amplia variedad de patologías, tanto agudas como crónicas. Algunas de las más comunes incluyen:

<div className="space-y-3 pl-2">
  <p>
    <span className="font-semibold">- Trastornos digestivos: </span>
    Gastritis, reflujo, colon irritable, estreñimiento, diarrea crónica, mala absorción de nutrientes, etc.
  </p>

  <p>
    <span className="font-semibold">- Problemas respiratorios: </span>
    Asma, bronquitis, alergias, resfriados recurrentes, sinusitis, etc.
  </p>

  <p>
    <span className="font-semibold">- Desequilibrios psicoemocionales: </span>
    Ansiedad, estrés, insomnio, depresión, fatiga mental, etc.
  </p>

  <p>
    <span className="font-semibold">- Enfermedades ginecológicas y urológicas: </span>
    Síndrome premenstrual, menstruaciones dolorosas, infertilidad, síntomas de menopausia, infecciones urinarias, etc.
  </p>

  <p>
    <span className="font-semibold">- Dolores musculoesqueléticos: </span>
    Artritis, dolor lumbar, tendinitis, rigidez muscular, fibromialgia.
  </p>

  <p>
    <span className="font-semibold">- Trastornos cardiovasculares y metabólicos: </span>
    Hipertensión, colesterol alto, diabetes, resistencia a la insulina, etc.
  </p>

  <p>
    <span className="font-semibold">- Trastornos de la piel: </span>
    Eczema, psoriasis, acné, cicatrización de heridas, etc.
  </p>
</div>

<p className="font-bold">
¿Es compatible con la medicina occidental?
</p>
<p>
Sí, la fitoterapia china puede complementar tratamientos médicos convencionales, pero siempre debe ser supervisada por un especialista para evitar interacciones.
</p>
<p className="font-bold">
¿Buscas una solución natural para tus problemas de salud? 
¡Reserva una cita con nuestros especialistas registrados en Acured y descubre cómo las fórmulas herbales pueden ayudarte a recuperar tu equilibrio!
</p>
      </div>
    ),
  },

  dietoterapia: {
    title: "Dietoterapia",
    content: (
      <div className="space-y-4">
        <p>
        La dietoterapia china es una disciplina terapéutica basada en los principios de la Medicina Tradicional China (MTC), que utiliza los alimentos como herramienta para prevenir y tratar desequilibrios en el organismo. 
</p>
<p>
A diferencia de la nutrición occidental, que analiza los componentes cuantitativos de los alimentos (proteínas, vitaminas, minerales, etc), este enfoque considera propiedades cualitativas, como la naturaleza térmica (fría, fresca, neutra, tibia o caliente) y los sabores (dulce, ácido, amargo, picante y salado), los cuales influyen en el funcionamiento de los órganos y sistemas corporales. Según el Huangdi Neijing (Clásico Interno del Emperador Amarillo), cada alimento actúa de manera específica en el cuerpo, pudiendo tonificar deficiencias, regular excesos o favorecer el equilibrio fisiológico. 
</p>
<p>
Su aplicación se personaliza según las necesidades individuales, las estaciones del año y las condiciones de salud, siguiendo la premisa de que una alimentación adecuada es el primer paso para mantener el bienestar, antes de recurrir a otras intervenciones terapéuticas.
</p>
<p className="font-bold">
Transforma tu salud desde la raíz: Agenda una cita con nuestros terapeutas expertos en dietoterapia china y descubre el poder curativo de los alimentos. ¡Tu bienestar comienza aquí!
</p>
      </div>
    ),
  },

  "sangria-terapeutica": {
    title: "Sangría terapéutica",
    content: (
      <div className="space-y-4">
        <p>
         En la Medicina China Tradicional, la sangría se considera una técnica valiosa para regular el flujo sanguíneo y aliviar lo que se conoce como "estancamiento" o congestión local.
</p>
<p>
Es una técnica terapéutica que consiste en la extracción controlada de pequeñas cantidades de sangre de puntos específicos o áreas de la piel (generalmente mediante lancetas estériles), y que se utiliza principalmente en condiciones donde hay evidencia de congestión o inflamación localizada, como dolor agudo (migrañas, contracturas musculares, ciática), procesos inflamatorios (artritis, tendinitis), alteraciones circulatorias (varices, hipertensión en etapas iniciales) y trastornos dermatológicos (dermatitis, herpes zóster), entre otros.
</p>
<p>
Según los textos clásicos, cuando el flujo sanguíneo se ve interrumpido, puede generar dolor, inflamación o disfunción en los tejidos. 
</p>
<p>
La sangría actúa liberando esta obstrucción, permitiendo que los nutrientes y los factores de defensa lleguen adecuadamente a los tejidos comprometidos.
</p>
<p>
Desde el punto de vista de la medicina moderna, la extracción de sangre estimula la liberación de factores vasoactivos y activa mecanismos de reparación de los tejidos dañados, mejorando la oxigenación y reduciendo la presión en capilares congestionados. A su vez, esta estimulación de terminaciones nerviosas de la piel, desencadena reflejos que modulan la percepción del dolor y la inflamación.
</p>
<p>
Estudios sugieren que la sangría en puntos específicos puede influir en la producción de citocinas antiinflamatorias, similar a los efectos de la acupuntura.
</p>
<p>
Descubre los beneficios de la Medicina China para tu salud.
</p>
<p className="font-bold">
¡Agenda una cita con nuestros terapeutas registrados, recibe tratamiento personalizado y da el primer paso hacia tu bienestar integral!
</p>


      </div>
    ),
  },

  "agua-de-fuego": {
    title: "Agua de fuego",
    content: (
      <div className="space-y-4">
        <p>
        La aguja de fuego (huo zhen), es una técnica especializada dentro de la Medicina China, que combina la estimulación con agujas de acupuntura y la aplicación controlada de calor. 
</p>
<p>
A diferencia de la moxibustión tradicional, este método calienta la aguja directamente antes de su inserción, generando un efecto terapéutico único. 
</p>
<p>
Desde la perspectiva de la Medicina China, se utiliza para tratar condiciones de frío o estancamiento en los tejidos, mientras que la ciencia moderna explica sus beneficios a través de mecanismos termorreguladores, vasculares y neurológicos.
</p>
<p>
Se ha comprobado que este método estimula los tejidos más profundamente, activando los mecanismos hormonales y fisiológicos del cuerpo para aliviar el dolor y reducir la inflamación. 
</p>
<p>
Es particularmente beneficiosa para tratar condiciones como artritis, dolores de espalda crónicos, contracturas musculares y problemas circulatorios en manos y pies. El calor suave de la aguja ayuda a relajar los tejidos tensos, mejorar la circulación en la zona y aliviar el dolor de manera muy efectiva.
</p>
<p>
Si padeces alguno de estos síntomas o condiciones, la aguja de fuego podría ser la solución. Te invitamos a agendar una cita con nuestros especialistas registrados, quienes evaluarán tu caso personalmente y determinarán si este tratamiento es adecuado para ti. 
<span className="font-bold"> ¡Encuentra al terapeuta más cercano en Acured y da el primer paso hacia un alivio efectivo y duradero!</span>
</p>

      </div>
    ),
  },

  "gua-sha": {
    title: "Gua Sha",
    content: (
      <div className="space-y-4">
        <p>
        El Gua Sha es una técnica de la Medicina Tradicional China que consiste en aplicar fricción de manera controlada con una herramienta lisa o roma sobre la piel previamente lubricada, produciendo una estimulación localizada. 
</p>
<p>
Tradicionalmente se utilizaban cuernos de búfalo, jade o huesos, mientras que actualmente se emplean herramientas de acero inoxidable o cerámica médica.  
</p>
<p>
Esta práctica, lejos de ser simplemente un masaje, produce una respuesta terapéutica importante a nivel circulatorio, neurológico e inmunológico. 
</p>
<p>
Se emplea principalmente para tratar condiciones donde existe dolor localizado, inflamación crónica o restricción del movimiento, como en casos de contracturas musculares, artrosis incipiente, migrañas tensionales y ciertos trastornos respiratorios. 
</p>
<p>
Esta técnica es especialmente útil para pacientes que buscan alternativas no farmacológicas para el manejo del dolor crónico o que presentan hipersensibilidad a la acupuntura.
</p>
<p>
Descubre el poder terapéutico de la Medicina China para recuperar tu bienestar de manera integral. 
<span className="font-bold"> ¡Agenda una consulta con nuestros especialistas registrados y comienza tu camino hacia una salud más equilibrada!</span>
</p>


      </div>
    ),
  },

  qigong: {
    title: "Qigong",
    content: (
      <div className="space-y-4">
        <p>
        El Qigong es una de las ramas más importantes de la Medicina China. Esta práctica combina movimientos suaves, control respiratorio, meditación y atención focalizada, regulando el flujo de Qi y sangre a través de los canales, mejorando la nutrición de los tejidos, resolviendo bloqueos, fortaleciendo los órganos internos y equilibrando las funciones corporales.
</p>
<p>
Dentro de sus aplicaciones terapéuticas se encuentran el estrés, la fatiga crónica, sensación de pesadez, mala circulación, extremidades frías, problemas digestivos, insomnio, dificultades respiratorias, rigidez articular, dolor musculoesquelético, entre otros. 
</p>

      </div>
    ),
  },
};
