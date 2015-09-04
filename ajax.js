var $ = (function(){

  var ajax = function(opts){
    var defaultOpts = {
      async: opts.async || false,
      complete: opts.complete || function(){ console.log("Request Completed.")},
      data : queryStringify(opts.data) || false,
      error: opts.error || function(){ console.log("Request Failure...")},
      headers: opts.headers || { header: "Content-type", value: "application/x-www-form-urlencoded" },
      method: opts.method || "GET",
      success: opts.success || function(){ console.log("Request Successful!")},
      url: opts.url || "http://reqr.es/users",
    }

    var xhr = new XMLHttpRequest();

    xhr.onload = function ( e ) {
      if ( xhr.readyState === 4 ) {
        if ( xhr.status >= 200 && xhr.status < 300 ) {
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
    defaultOpts.data ? xhr.send(JSON.stringify(defaultOpts.data)) : xhr.send();
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

  var queryStringify = function(opts){
    var result = "";
    for (key in opts){
      result += "&";
      result += key;
      result += "=";
      result += opts[key];
    }
    return result.slice(1);
  }

  return {
    ajax: ajax,
    get: get,
    post: post,
    queryStringify: queryStringify,
  };
})();


// $.ajax({async: true, success: function(xhr){return xhr.responseText}, url: 'http://reqr.es/api/users?page=2'})
// $.ajax({async: true, url: 'http://reqr.es/api/users/23', error: function(xhr){return xhr.responseText}})
// $.get({async: true, success: function(xhr){return xhr.responseText}, url: 'http://reqr.es/api/users?page=2'})
$.post({data: {
        "name": "morpheus",
        "job": "leader"
      },
       async: true,
       url: 'http://reqr.es/api/users',
       success: function(xhr){return JSON.parse(xhr.responseText) }});
