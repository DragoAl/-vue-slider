// instanzio vue
var carousel = new Vue ( {
    // dichiaro il container dentro il quale sarà utilizzato
    el : "#app",
    data : {
        activeSlide: 0,
        
        // array di oggetti
        slides: [
            {
                image : 'img/01.jpg',
                title : 'Svezia',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image : 'img/02.jpg',
                title : 'Svizzera',
                text : 'Lorem ipsum',
                
            },
            {
                image : 'img/03.jpg',
                title : 'Gran Bretagna',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                
            },
            {
                image : 'img/04.jpg',
                title : 'Germania',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                
            },
            {
                image : 'img/05.jpg',
                title : 'Paradise',
                text : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

            },
        
        ],        
    }, 
    
    // le nostre funzioni che eseguono i rispettivi click sui btn
    methods : {
        // quando la slide attiva è uguale all'ultima pos dell'array e clicco allora setto la poszione a 0, altimenti incremento la posizione
        nextSlide: function() {
            if (this.activeSlide === this.slides.length - 1) {
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }

        },
        // quando la slide attiva è la prima pos dell'array e clicco allora setto la poszione uguale all'ultima pos dell'array, altimenti decremento la posizione
        prevSlide: function() {
            if (this.activeSlide === 0) {
                this.activeSlide = this.slides.length - 1;
            } else {
                this.activeSlide --;
            }

        }
    } 
}
);
