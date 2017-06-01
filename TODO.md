# Organic todo list for SlaerFX project

- Reconfigure the entity / object relationships to use prototypical inheritence rather than a custom property extensions.
  - Use prototypical inheritence
  - remove the "components" property in favour of POJSOs
- Reconstruct the engines lowest-levels to use generic pipelines instead of the current fixed logic.
- Introduct the idea of events, handlers and mapping functions.
- Object instances should be stored in both a name -> instance hashmap for queries and a plain old array for better iteration and processing in bulk (such as sorting).
- create the abstract concept of a process (which is just a handy wrapper for async "fire-and-forget" operations)
- make a start of the documentation side of things