'use strict';

module.exports = function(grunt){

  grunt.initConfig({

    // WebP configuration
    cwebp: {
      static: {
        files: {
        }
      },
      dynamic: {
        options: {
          q: 50
        },
        files: [{
          expand: true,
          cwd: './',
          src: ['./imagenes/redimensionadas/imagenes/*.{jpg,jpeg,png,webp}'],
          dest: './imagenes/webp/'
        }]
      }
    },

//Responsive de imagenes
    responsive_images: {
      dev: {
        options: {
	  engine: 'im',
          sizes: [{
            name: '320',
            width: 320
          },{
            name: '640',
            width: 640
          },{
            name: '1024',
            width: 1024
          },{
            name: '2000',
            width: 2000
          }
        ]},
        files: [{
          expand: true,
          src: ['./imagenes/*.{jpg,jpeg,png,webp}'],
          dest: 'imagenes/redimensionadas/'
        }]
      }
    }


    
  });


  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-cwebp');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default',['responsive_images','cwebp']);
}