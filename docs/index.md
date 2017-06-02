

# Pipeline

At the very heart of the SlaerFX engine is the process Pipeline which consists of a set of ordered middlewares that process the application's state in a sequencial fasion. 

# Middleware

    slaer.use(...);

# Component

Components represent the properties and configurations that are attached to Objects and Entities. By convension, root components with names matching a known behaviour will automatiically be stitched up, the body of which will be passed as the behavioual configuration during initialisation.

# Object

    slaer.object(...);

Objects represent the "things" within your virtual world. More traditionally, these "things" are usually refered to as the actors; Objects that play a role within some virtual world.

They are the cameras, the players, the lights, the triggers, the particles.

# Entity

    slaer.entity(...)

Entities provide a way of defining a set of components that Objects, when based on the Entity, will inherit them. It is much the same sort of relationships between class definitions and object instances in many languages; The Entities act as the base definition of how Objects of this kind should be formed.

# Behaviour

    slaer.behaviour(...)

# Service

    slaer.service(...)

# Event

    slaer.event(...)

# Process

    slaer.process(...)
