/* 
particle js was not setup for js modules
so we import to load it which will append it
to the window object. We can then use it 
*/
import "particles.js/particles";

/*
Parcel allows us to import json files and
it automatically parces them to js object 
*/
import configuration from "../data/particlesjs-config.json";

/*
We access the module from the window object
*/
const particlesJS = window.particlesJS;

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
/*
In this case we don't run particlesJS.load because
it is already loaded
*/
particlesJS("particles-js", configuration, function() {
  console.log("callback - particles.js config loaded");
});
