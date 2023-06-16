# Crear una API con express.js/typescript usando arquitectura hexagonal

Modelar Usuarios (`User`), Pasajes (`Trip`) la compra de pasajes por usuario (`Ticket`)
Los modelos deben contener:

```
User:
name, lastname, ident, address, email
```

```
Trip:
uuid, name, from, to, startDate, endDate, availableSeats, price
```

```
Ticket:
uuid, passangerName, passangerLastname, passengerIdent, tripId, tripName, tripStartDate, tripEndDate, createdAt, updatedAt
```

Implementar `crud/bread` para User y Trip.

- Implementar al menos la compra del `Ticket` y la edicion en caso de tener algun dato incorrecto.
- La compra debe enviar un msg al usuario.
  Implementar todo usando un logger a eleccion.
  Implementar test unitarios con `mocha/chai`.
  Implementar todo usando `eslint`
