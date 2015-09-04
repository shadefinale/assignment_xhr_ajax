var $ = (function(){

  var ajax = function(opts){
    var defaultOpts = {
      async: opts.async || false,
      complete: opts.complete || function(){ console.log("Request Completed.")},
      data : opts.data || {},
      error: opts.error || function(){ console.log("Request Failure...")},
      headers: opts.headers || { header: "Content-type", value: "application/x-www-form-urlencoded" },
      method: opts.method || "GET",
      success: opts.success || function(){ console.log("Request Successful!")},
      url: opts.url || "http://reqr.es/users",
    }

    var xhr = new XMLHttpRequest();

    xhr.onload = function ( e ) {
      if ( xhr.readyState === 4 ) {
        if ( xhr.status === 200 ) {
          console.log( defaultOpts.success(xhr) );
          // defaultOpts.success();
          // console.log( this.responseText )
        } else {
          console.error( defaultOpts.error(xhr) );
        }
        console.log( defaultOpts.complete());
      }
    };

    xhr.open( defaultOpts.method, defaultOpts.url, defaultOpts.async );
    xhr.setRequestHeader( defaultOpts.headers.header, defaultOpts.headers.value );
    xhr.send();
  }

  var get = function(opts){
    var defaultOpts = {
      async: opts.async || false,
      complete: opts.complete || function(){ console.log("Request Completed.")},
      data : opts.data || {},
      error: opts.error || function(){ console.log("Request Failure...")},
      headers: opts.headers || { header: "Content-type", value: "application/x-www-form-urlencoded" },
      method: opts.method || "GET",
      success: opts.success || function(){ console.log("Request Successful!")},
      url: opts.url || "http://reqr.es/users"
    }

    ajax(defaultOpts)
  }

  var post = function(opts){
    var defaultOpts = {
      async: opts.async || false,
      complete: opts.complete || function(){ console.log("Request Completed.")},
      data : opts.data || {},
      error: opts.error || function(){ console.log("Request Failure...")},
      headers: opts.headers || { header: "Content-type", value: "application/x-www-form-urlencoded" },
      method: opts.method || "POST",
      success: opts.success || function(){ console.log("Request Successful!")},
      url: opts.url || "http://reqr.es/users",
    }

    ajax(defaultOpts)
  }

  return {
    ajax: ajax,
    get: get,
    post: post
  };
})();


$.ajax({async: true, success: function(xhr){return xhr.responseText}, url: 'http://reqr.es/api/users?page=2'})
$.ajax({async: true, url: 'http://reqr.es/api/users/23', error: function(xhr){return xhr.responseText}})
