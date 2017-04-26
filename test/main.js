
slaer.start();


// Define an entity
slaer.entity('bullet', {
  flyThroughTheAir: true
});

// create an instance (object)
slaer.entity('bullet').create('bullet#02', {

});

// create an instance (object) directly
slaer.object('bullet#03', {

});


// create an instance (object) directly
slaer.object({
  abc: 123
});
slaer.object({
  abc: 123
});


console.log('E', slaer.entities());
console.log('O', slaer.objects());
