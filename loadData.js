document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/Epirex/psicologos-api/gh-pages/psicologos.json')
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector('#psicologos-table tbody');
            data.forEach(psicologo => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${psicologo['M.P']}</td>
                    <td>${psicologo.nombre}</td>
                    <td>${psicologo.domicilio_laboral}</td>
                    <td>${psicologo.telefono}</td>
                    <td>${psicologo.orientacion_clinica}</td>
                    <td>${psicologo.domicilio}</td>
                    <td>${psicologo.obra_social}</td>
                `;
                tableBody.appendChild(row);
            });
            $('#psicologos-table').DataTable({
                "paging": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "language": {
                    "search": "Buscar:",
                    "lengthMenu": "Mostrar _MENU_ registros por página",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(filtrado de _MAX_ registros en total)",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                }
            });
        })
        .catch(error => console.error('Error:', error));
});
