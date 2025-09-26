import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const ProfileDetailsSection = (): JSX.Element => {
  // File upload areas data
  const uploadAreas = [
    {
      title: "Certificados",
      id: "certificates-upload",
    },
    {
      title: "Imagenes",
      id: "images-upload",
    },
  ];

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <section className="flex flex-col gap-2.5 px-8 py-6 flex-1 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <header className="w-full">
              <h1 className="text-heading-lg font-bold text-primary-900">
                Perfil
              </h1>
            </header>

            <Card className="w-full shadow-shadow-sm bg-white rounded-xl">
              <CardContent className="p-4 bg-white rounded-xl">
                <div className="flex flex-col gap-6 pb-6 border-b border-shadow-100">
                  {/* Datos Administrador */}
                  <div className="flex flex-col gap-3 w-full">
                    <h2 className="font-paragraph-p2-semi-bold font-bold text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      Datos Administrador
                    </h2>

                    <div className="flex gap-3 w-full">
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Nombre
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Nombre"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Apellido
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Apellido"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Rut
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Rut"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Datos Centro Médico */}
                  <div className="flex flex-col gap-3 w-full">
                    <h2 className="font-paragraph-p2-semi-bold font-bold text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      Datos Centro Médico
                    </h2>

                    {/* Primera fila: Razón social y Rut empresa */}
                    <div className="flex gap-3 w-full">
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Razón social
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Razón social"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Rut empresa
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Rut empresa"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Segunda fila: Dirección y Giro */}
                    <div className="flex gap-3 w-full">
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Dirección
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Dirección"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Giro
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Giro"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tercera fila: Mail y Teléfono */}
                    <div className="flex gap-3 w-full">
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Mail
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Mail"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <label className="font-paragraph-p1-semi-bold text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                            Teléfono
                          </label>
                          <Input
                            className="bg-primary-50 border-[#f1f4f2] p-2 h-auto"
                            aria-label="Teléfono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificados e Imágenes - Sin cambios */}
                  <div className="flex gap-6 w-full">
                    {uploadAreas.map((area) => (
                      <div key={area.id} className="flex-1 flex flex-col gap-3">
                        <h3 className="font-paragraph-p2-semi-bold font-bold text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                          {area.title}
                        </h3>

                        <div className="flex flex-col items-center gap-1 p-4 w-full bg-white rounded-md border-2 border-dashed border-primary-100" style={{ borderStyle: 'dashed', borderWidth: '2px', borderSpacing: '8px' }}>
                          <div className="flex flex-col items-center gap-3 w-full">
                            <div className="flex w-20 h-20 items-center justify-center bg-primary-50 rounded-full">
                              <img 
                                src="/image copy.png" 
                                alt="Document icon" 
                                className="w-12 h-12 object-contain"
                              />
                            </div>

                            <div className="flex flex-col items-center gap-1 w-full">
                              <div className="flex justify-center gap-1 w-full">
                                <span className="font-paragraph-p1 text-gray-500 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                                  Haga clic para cargar
                                </span>
                                <span className="font-paragraph-p1 text-shadow-900 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                                  o arrastra y suelta
                                </span>
                              </div>

                              <p className="font-paragraph-p1 text-shadow-900 text-[length:var(--paragraph-p1-font-size)] text-center tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                                (Tamaño máximo de archivo: 25 MB)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botones - Sin cambios */}
                <div className="flex justify-between w-full mt-4">
                  <Button
                    variant="outline"
                    className="bg-neutralswhite shadow-shadow-xs rounded-3xl px-4 py-2 h-auto"
                  >
                    <span className="text-zinc-900 font-inter-text-xs-medium text-[length:var(--inter-text-xs-medium-font-size)] tracking-[var(--inter-text-xs-medium-letter-spacing)] leading-[var(--inter-text-xs-medium-line-height)] [font-style:var(--inter-text-xs-medium-font-style)]">
                      Cancelar
                    </span>
                  </Button>

                  <Button className="bg-primary-500 hover:bg-primary-600 shadow-shadow-md rounded-3xl px-4 py-2 h-auto">
                    <span className="text-neutralswhite font-text-text-xs-text-xs-font-medium text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                      Guardar
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};