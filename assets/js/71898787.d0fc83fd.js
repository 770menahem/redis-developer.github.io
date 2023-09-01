"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={id:"index-spring-fixed-window-reactive-gears",title:"Atomicity with Gears",sidebar_label:"Atomicity with Gears",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears"},o=void 0,s={unversionedId:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-gears",id:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-gears",title:"Atomicity with Gears",description:"This tutorial uses Lettuce, which is an unsupported Redis library. For production applications, we recommend using Jedis",source:"@site/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears.mdx",sourceDirName:"develop/java/spring/rate-limiting/fixed-window",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears.mdx",tags:[],version:"current",lastUpdatedAt:1693427492,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{id:"index-spring-fixed-window-reactive-gears",title:"Atomicity with Gears",sidebar_label:"Atomicity with Gears",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears"},sidebar:"docs",previous:{title:"Atomicity with Lua",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua"},next:{title:"C",permalink:"/develop/C/"}},l={},d=[{value:"Improving atomicity and performance with RedisGears",id:"improving-atomicity-and-performance-with-redisgears",level:2},{value:"What is RedisGears?",id:"what-is-redisgears",level:3},{value:"A Rate-Limiting RedisGears Function",id:"a-rate-limiting-redisgears-function",level:3},{value:"The <code>rate_limit</code> function",id:"the-rate_limit-function",level:4},{value:"Function Registration",id:"function-registration",level:4},{value:"RedisGears in SpringBoot",id:"redisgears-in-springboot",level:2},{value:"Lettuce Mod",id:"lettuce-mod",level:2},{value:"Accessing Gears Commands in SpringBoot",id:"accessing-gears-commands-in-springboot",level:3},{value:"Registering the Gears function",id:"registering-the-gears-function",level:3},{value:"Modifying the Filter to use the Gears function",id:"modifying-the-filter-to-use-the-gears-function",level:2},{value:"Testing with curl",id:"testing-with-curl",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"LETTUCE",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial uses Lettuce, which is an unsupported Redis library. For production applications, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/jedis"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"Jedis"))))),(0,r.kt)("h2",{id:"improving-atomicity-and-performance-with-redisgears"},"Improving atomicity and performance with RedisGears"),(0,r.kt)("h3",{id:"what-is-redisgears"},"What is RedisGears?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgears/"},"RedisGears"),' is a dynamic server-side data processing engine, where the "server" part is Redis itself.\nRedisGears is distributed as a Redis module. You can start a Redis instance preconfigured with Gears using the official Docker image:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -p 6379:6379 redislabs/redisgears:latest\n")),(0,r.kt)("p",null,"Or, as I do most of the time, using the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/redislabs/redismod/dockerfile"},'"redismod"')," image which include Gears and\nall the other Redis, Inc. supported modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -p 6379:6379 redislabs/redismod\n")),(0,r.kt)("p",null,"RedisGears was built with the purpose of providing a data processing engine inside of Redis, with more formal semantics\nthan the simpler Lua server-side scripting. Think of it as a more flexible map-reduce engine for Redis.\nIt supports supports transaction, batch, and event-driven processing of Redis data.\nGears allow you to localize computation and data provides a built-in coordinator to facilitate processing\ndistributed data in a clustered environment."),(0,r.kt)("p",null,'In RedisGears, the main unit of processing is the RedisGears function, which can be (currently) written in Python (more languages are being worked on).\nThese functions run on their own thread, separate from Redis\' main thread and can be executed in response to\nkeyspace events or imperatively as a result of external commands.\nThe functions are "registered" (deployed) to the Gears engine, and have an associated name and a registration Id.'),(0,r.kt)("p",null,"During registration we pick a specific reader for our function which defines how the function\ngets its initial data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeysReader"),": Redis keys and values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeysOnlyReader"),": Redis keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StreamReader"),": Redis Stream messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PythonReader"),": Arbitrary Python generator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShardsIDReader"),": Shard ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CommandReader"),": Command arguments from application client.")),(0,r.kt)("h3",{id:"a-rate-limiting-redisgears-function"},"A Rate-Limiting RedisGears Function"),(0,r.kt)("p",null,"Depending on the reader type, Gear Functions can either be run immediately, on demand, as batch jobs or in an event-driven manner by registering it to trigger automatically on various types of events."),(0,r.kt)("p",null,"The Python function ",(0,r.kt)("inlineCode",{parentName:"p"},"rate_limit")," takes 3 parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The Redis key backing the counter for a given user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_request"),": The request quota for the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expiry"),": The number of seconds in the future to set the counter TTL.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def rate_limit(key, max_requests, expiry):\n  requests = execute('GET', key)\n  requests = int(requests) if requests else -1\n  max_requests = int(max_requests)\n  expiry = int(expiry)\n\n  if (requests == -1) or (requests < max_requests):\n    with atomic():\n      execute('INCR', key)\n      execute('EXPIRE', key, expiry)\n    return False\n  else:\n    return True\n\n# Function registration\ngb = GB('CommandReader')\ngb.map(lambda x: rate_limit(x[1], x[2], x[3]))\ngb.register(trigger='RateLimiter')\n")),(0,r.kt)("p",null,"Place the script under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/scripts"),". Now, Let's break it down:"),(0,r.kt)("h4",{id:"the-rate_limit-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"rate_limit")," function"),(0,r.kt)("p",null,"Similarly to what we did in the previous implementation, we:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Retrieve the current number of requests for the passed ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"execute"),"-ing the ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," command."),(0,r.kt)("li",{parentName:"ol"},"Cast the result to an ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," and if not found, default to ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")),(0,r.kt)("li",{parentName:"ol"},"Cast ",(0,r.kt)("inlineCode",{parentName:"li"},"max_requests")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"expiry")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ol"},"If the quota hasn't been exceeded, perform the ",(0,r.kt)("inlineCode",{parentName:"li"},"INCR"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"EXPIRE")," commands in a transactions (",(0,r.kt)("inlineCode",{parentName:"li"},"with atomic():"),")\nand return ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," (no rate limiting - request is allowed)"),(0,r.kt)("li",{parentName:"ol"},"Otherwise, return ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," (deny the request)")),(0,r.kt)("h4",{id:"function-registration"},"Function Registration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the bottom of the script, in the ",(0,r.kt)("inlineCode",{parentName:"li"},"# Function registration")," section, we instantiate the\n",(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgears/runtime.html#gearsbuilder"},(0,r.kt)("inlineCode",{parentName:"a"},"GearsBuilder"),"(",(0,r.kt)("inlineCode",{parentName:"a"},"GB"),")")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"CommandReader"),"\nreader. The ",(0,r.kt)("inlineCode",{parentName:"li"},"GearsBuilder"),' "builds" the context of the function, in parameters, transformations, triggers, etc.'),(0,r.kt)("li",{parentName:"ol"},"We use the ",(0,r.kt)("inlineCode",{parentName:"li"},"map")," method to performs a one-to-one mapping of records to the params of the ",(0,r.kt)("inlineCode",{parentName:"li"},"rate_limit"),"\nfunction via a mapper function callback."),(0,r.kt)("li",{parentName:"ol"},"We can now invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"register")," action to register the function as an event handler. The event in our case is the\ntrigger ",(0,r.kt)("inlineCode",{parentName:"li"},"'RateLimiter'"),".")),(0,r.kt)("h2",{id:"redisgears-in-springboot"},"RedisGears in SpringBoot"),(0,r.kt)("p",null,"In order to use our RedisGear function from our SpringBoot application we need to do a few things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the function to the Redis server"),(0,r.kt)("li",{parentName:"ol"},"Execute the function to get a yay/nay answer on each request")),(0,r.kt)("h2",{id:"lettuce-mod"},"Lettuce Mod"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/lettucemod"},"LettuceMod")," is a Java client for Redis Modules based on Lettuce created by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jruaux"},"Julien Ruaux "),".\nIt supports the following modules in standalone or cluster configurations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers and Functions"),(0,r.kt)("li",{parentName:"ul"},"JSON"),(0,r.kt)("li",{parentName:"ul"},"Search"),(0,r.kt)("li",{parentName:"ul"},"Time Series")),(0,r.kt)("p",null,"To use LettuceMod we'll add the dependency to the Maven POM as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.redis</groupId>\n  <artifactId>spring-lettucemod</artifactId>\n  <version>1.7.0</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"accessing-gears-commands-in-springboot"},"Accessing Gears Commands in SpringBoot"),(0,r.kt)("p",null,"To access any of the LettuceMod supported modules we will inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulRedisModulesConnection")," in\nour ",(0,r.kt)("inlineCode",{parentName:"p"},"FixedWindowRateLimiterApplication")," class as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nStatefulRedisModulesConnection<String, String> connection;\n")),(0,r.kt)("p",null,"Add the matching import statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.redis.lettucemod.api.StatefulRedisModulesConnection;\n")),(0,r.kt)("h3",{id:"registering-the-gears-function"},"Registering the Gears function"),(0,r.kt)("p",null,"We'll start by writing a function to determine whether the function with the trigger ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiter")," has been\nregistered. It takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Registration"),"s and digs deep to extract the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," argument\nusing the Java Streams API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Optional<String> getGearsRegistrationIdForTrigger(List<Registration> registrations, String trigger) {\n  return registrations.stream().filter(r -> r.getData().getArgs().get("trigger").equals(trigger)).findFirst().map(Registration::getId);\n}\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," annotated method ",(0,r.kt)("inlineCode",{parentName:"p"},"loadGearsScript")," method:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We retrieve an instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"RedisGearsCommands")," from the previously injected ",(0,r.kt)("inlineCode",{parentName:"li"},"StatefulRedisModulesConnection")),(0,r.kt)("li",{parentName:"ol"},"We get the currently registered Gears functions via the ",(0,r.kt)("inlineCode",{parentName:"li"},"dumpregistrations")," method"),(0,r.kt)("li",{parentName:"ol"},"We pass the list of registrations to our ",(0,r.kt)("inlineCode",{parentName:"li"},"getGearsRegistrationIdForTrigger")),(0,r.kt)("li",{parentName:"ol"},"If we don't find the registration we proceed to register the function:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Load the function from the classpath into a ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"py")),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"pyexecute")," method passing the ",(0,r.kt)("inlineCode",{parentName:"li"},"py")," script payload")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@PostConstruct\npublic void loadGearsScript() throws IOException {\n  String py = StreamUtils.copyToString(new ClassPathResource("scripts/rateLimiter.py").getInputStream(),\n      Charset.defaultCharset());\n  RedisGearsCommands<String, String> gears = connection.sync();\n  List<Registration> registrations = gears.dumpregistrations();\n\n  Optional<String> maybeRegistrationId = getGearsRegistrationIdForTrigger(registrations, "RateLimiter");\n  if (maybeRegistrationId.isEmpty()) {\n    try {\n      ExecutionResults er = gears.pyexecute(py);\n      if (er.isOk()) {\n        logger.info("RateLimiter.py has been registered");\n      } else if (er.isError()) {\n        logger.error(String.format("Could not register RateLimiter.py -> %s", Arrays.toString(er.getErrors().toArray())));\n      }\n    } catch (RedisCommandExecutionException rcee) {\n      logger.error(String.format("Could not register RateLimiter.py -> %s", rcee.getMessage()));\n    }\n  } else {\n    logger.info("RateLimiter.py has already been registered");\n  }\n}\n')),(0,r.kt)("h2",{id:"modifying-the-filter-to-use-the-gears-function"},"Modifying the Filter to use the Gears function"),(0,r.kt)("p",null,"Next, we'll modify the filter to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulRedisModulesConnection")," as well as the\nquota; the value that we need to pass to the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class RateLimiterHandlerFilterFunction implements HandlerFilterFunction<ServerResponse, ServerResponse> {\n\n  private StatefulRedisModulesConnection<String, String> connection;\n  private Long maxRequestPerMinute;\n\n  public RateLimiterHandlerFilterFunction(StatefulRedisModulesConnection<String, String> connection,\n      Long maxRequestPerMinute) {\n    this.connection = connection;\n    this.maxRequestPerMinute = maxRequestPerMinute;\n  }\n")),(0,r.kt)("p",null,"Now we can modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method to use the function. Gears functions are invoked by\ntriggering the correct event ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiter")," and passing the parameters required by the function;\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", the quota and the TTL seconds in the future."),(0,r.kt)("p",null,"As we've have done previously, if the function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," we let the request through, otherwise\nwe return an ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP 429"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  int currentMinute = LocalTime.now().getMinute();\n  String key = String.format("rl_%s:%s", requestAddress(request.remoteAddress()), currentMinute);\n\n  RedisGearsCommands<String, String> gears = connection.sync();\n\n  List<Object> results = gears.trigger("RateLimiter", key, Long.toString(maxRequestPerMinute), "59");\n  if (!results.isEmpty() && !Boolean.parseBoolean((String) results.get(0))) {\n    return next.handle(request);\n  } else {\n    return ServerResponse.status(TOO_MANY_REQUESTS).build();\n  }\n}\n')),(0,r.kt)("h2",{id:"testing-with-curl"},"Testing with curl"),(0,r.kt)("p",null,"Once again, we use curl loop to test the limiter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\n')),(0,r.kt)("p",null,"You should see the 21st request being rejected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\nPONG :: HTTP 200, 4 bytes, 0.064786 s\nPONG :: HTTP 200, 4 bytes, 0.009926 s\nPONG :: HTTP 200, 4 bytes, 0.009546 s\nPONG :: HTTP 200, 4 bytes, 0.010189 s\nPONG :: HTTP 200, 4 bytes, 0.009399 s\nPONG :: HTTP 200, 4 bytes, 0.009210 s\nPONG :: HTTP 200, 4 bytes, 0.008333 s\nPONG :: HTTP 200, 4 bytes, 0.008009 s\nPONG :: HTTP 200, 4 bytes, 0.008919 s\nPONG :: HTTP 200, 4 bytes, 0.009271 s\nPONG :: HTTP 200, 4 bytes, 0.007515 s\nPONG :: HTTP 200, 4 bytes, 0.007057 s\nPONG :: HTTP 200, 4 bytes, 0.008373 s\nPONG :: HTTP 200, 4 bytes, 0.007573 s\nPONG :: HTTP 200, 4 bytes, 0.008209 s\nPONG :: HTTP 200, 4 bytes, 0.009080 s\nPONG :: HTTP 200, 4 bytes, 0.007595 s\nPONG :: HTTP 200, 4 bytes, 0.007955 s\nPONG :: HTTP 200, 4 bytes, 0.007693 s\nPONG :: HTTP 200, 4 bytes, 0.008743 s\n:: HTTP 429, 0 bytes, 0.007226 s\n:: HTTP 429, 0 bytes, 0.007388 s\n')),(0,r.kt)("p",null,"If we run Redis in monitor mode, we should see the Lua calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"RG.TRIGGER")," and under that you should see the\ncalls to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," for allowed requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'1631249244.006212 [0 172.17.0.1:56036] "RG.TRIGGER" "RateLimiter" "rl_localhost:47" "20" "59"\n1631249244.006995 [0 ?:0] "GET" "rl_localhost:47"\n1631249244.007182 [0 ?:0] "INCR" "rl_localhost:47"\n1631249244.007269 [0 ?:0] "EXPIRE" "rl_localhost:47" "59"\n')),(0,r.kt)("p",null,"And for rate limited request you should see only the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1631249244.538478 [0 172.17.0.1:56036] "RG.TRIGGER" "RateLimiter" "rl_localhost:47" "20" "59"\n1631249244.538809 [0 ?:0] "GET" "rl_localhost:47"\n')),(0,r.kt)("p",null,"The complete code for this implementation is under the branch ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/fixed-window-rate-limiter/tree/with_gears"},(0,r.kt)("inlineCode",{parentName:"a"},"with_gears")),"."))}u.isMDXComponent=!0}}]);