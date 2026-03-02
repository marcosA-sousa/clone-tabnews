function status(request, response) {
  response.status(200).json({ servidor: "funcionando" });
}
export default status;
