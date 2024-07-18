import React from 'react';

export default function HomePage(){
    return (
        <div>
        
          <title>SmartCity - Home</title>
          <meta name="description" content="Bienvenido a la ciudad inteligente" />
        
      
        <header className="bg-blue-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold">Bienvenido a SmartCity</h1>
          <p className="mt-4">Descubre cómo la tecnología está mejorando nuestra ciudad.</p>
        </header>
        <main className="p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Resumen de la Ciudad Inteligente</h2>
            <p className="text-white">Nuestra ciudad inteligente utiliza tecnología avanzada para mejorar la calidad de vida de sus habitantes. Desde transporte público eficiente hasta sistemas de gestión de energía, estamos construyendo un futuro más sostenible y conectado.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Estadísticas Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Transporte Público</h3>
                <p className="text-gray-700">Uso diario: 150,000 personas</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Energía Renovable</h3>
                <p className="text-gray-700">Cobertura: 80% de la ciudad</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Red de Sensores</h3>
                <p className="text-gray-700">Sensores activos: 10,000</p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Funcionalidades Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Gestión de Tráfico</h3>
                <p className="text-gray-700">Sistemas inteligentes para reducir congestiones.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Monitoreo de Calidad del Aire</h3>
                <p className="text-gray-700">Sensores distribuidos por la ciudad.</p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Noticias Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Implementación de Nuevos Autobuses Eléctricos</h3>
                <p className="text-gray-700">Fecha: 10 de julio de 2024</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-gray-700">Lanzamiento de la App Móvil SmartCity</h3>
                <p className="text-gray-700">Fecha: 15 de julio de 2024</p>
              </div>
            </div>
          </section>
        </main>
      </div>)
}