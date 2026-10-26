export function getUsers(request, response) {
    response.send([]);
}
export function getUserById(request, response) {
    response.send({});
}
export function createUser(request, response) {
    response.status(201).send({
        id: 1,
        username: request.body.username,
        email: request.body.email,
    });
}
//# sourceMappingURL=users.js.map