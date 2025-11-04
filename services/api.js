
function handleError(error) {
  console.log("ubo un error:", error);
}
function fetchData() {
  try {
    let ok = false;

    if (!ok) {
      throw "No se pudo obtener la información del servidor";
    }

    console.log("Datos recibidos correctamente");
  } catch (error) {
    handleError(error);
  }
}

fetchData();
module.exports = { fetchData, handleError };


