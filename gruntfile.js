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
          cwd: 'imagenes/',
          src: ['imagenes/*.{jpg,jpeg,png}'],
          dest: 'imagenes/'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small',
            width: 950
          },{
            name: 'medium',
            width: 1500
          },{
            name: 'large',
            width: 2000
          },{
            name: 'extralarge',
            width: 2500
          }
        ]},
        files: [{
          expand: true,
          src: ['imagenes/**/*.webp'],
          cwd: 'imagenes/',
          dest: 'imagenes/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-cwebp');
  grunt.loadNpmTasks('grunt-imagemagick');

  grunt.registerTask('default',['cwebp','responsive_images']);
}