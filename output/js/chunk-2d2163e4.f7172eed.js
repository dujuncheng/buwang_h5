(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2163e4"],{c243:function(e,r){(function(e){var r=/%%?[~:\w]+%?|!\S+!/,n={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},i=/"(?:[\\"]"|[^"])*"(?!")/,t=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:i,parameter:n,variable:r,number:t,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:i,parameter:n,variable:r,number:t,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:i,parameter:n,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:t,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:i,parameter:n,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:t,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(Prism)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhdGNoLmpzIl0sIm5hbWVzIjpbIlByaXNtIiwidmFyaWFibGUiLCJwYXJhbWV0ZXIiLCJwYXR0ZXJuIiwiYWxpYXMiLCJpbnNpZGUiLCJzdHJpbmciLCJudW1iZXIiLCJsYW5ndWFnZXMiLCJiYXRjaCIsImxvb2tiZWhpbmQiXSwibWFwcGluZ3MiOiJrR0FBQyxTQUFVQSxHQUNWLElBQUlDLEVBQVcscUJBQ1hDLEVBQVksQ0FDZkMsUUFBUywrQ0FDVEMsTUFBTyxZQUNQQyxPQUFRLENBQ1AsWUFBZSxNQUdiQyxFQUFTLDBCQUNUQyxFQUFTLGdCQUViUCxFQUFNUSxVQUFVQyxNQUFRLENBQ3ZCLFFBQVcsQ0FDVixTQUNBLENBQ0NOLFFBQVMsNkRBQ1RPLFlBQVksSUFHZCxNQUFTLENBQ1JQLFFBQVMsUUFDVEMsTUFBTyxZQUVSLFFBQVcsQ0FDVixDQUVDRCxRQUFTLHFGQUNUTyxZQUFZLEVBQ1pMLE9BQVEsQ0FDUCxRQUFXLHdCQUNYLE9BQVVDLEVBQ1YsVUFBYUosRUFDYixTQUFZRCxFQUNaLE9BQVVNLEVBQ1YsWUFBZSxXQUdqQixDQUVDSixRQUFTLHdNQUNUTyxZQUFZLEVBQ1pMLE9BQVEsQ0FDUCxRQUFXLDREQUNYLE9BQVVDLEVBQ1YsVUFBYUosRUFDYixTQUFZRCxFQUNaLE9BQVVNLEVBQ1YsU0FBWSwyQ0FHZCxDQUVDSixRQUFTLDhCQUNUTyxZQUFZLEVBQ1pMLE9BQVEsQ0FDUCxRQUFXLGFBR2IsQ0FFQ0YsUUFBUyxrR0FDVE8sWUFBWSxFQUNaTCxPQUFRLENBQ1AsUUFBVyxVQUNYLE9BQVVDLEVBQ1YsVUFBYUosRUFDYixTQUFZLENBQ1hELEVBQ0EsbUNBRUQsT0FBVU0sRUFDVixTQUFZLGtDQUNaLFlBQWUsV0FHakIsQ0FFQ0osUUFBUyx3RkFDVE8sWUFBWSxFQUNaTCxPQUFRLENBQ1AsUUFBVyxVQUNYLE9BQVVDLEVBQ1YsVUFBYUosRUFDYixNQUFTLENBQ1JDLFFBQVMsY0FDVE8sWUFBWSxFQUNaTixNQUFPLFlBRVIsU0FBWUgsRUFDWixPQUFVTSxFQUNWLFNBQVksUUFJZixTQUFZLE9BQ1osWUFBZSxVQWhHakIsQ0FrR0VQIiwiZmlsZSI6ImpzL2NodW5rLTJkMjE2M2U0LmY3MTcyZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXHR2YXIgdmFyaWFibGUgPSAvJSU/W346XFx3XSslP3whXFxTKyEvO1xuXHR2YXIgcGFyYW1ldGVyID0ge1xuXHRcdHBhdHRlcm46IC9cXC9bYS16P10rKD89WyA6XXwkKTo/fC1bYS16XVxcYnwtLVthLXotXStcXGIvaW0sXG5cdFx0YWxpYXM6ICdhdHRyLW5hbWUnLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogLzovXG5cdFx0fVxuXHR9O1xuXHR2YXIgc3RyaW5nID0gL1wiKD86W1xcXFxcIl1cInxbXlwiXSkqXCIoPyFcIikvO1xuXHR2YXIgbnVtYmVyID0gLyg/OlxcYnwtKVxcZCtcXGIvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5iYXRjaCA9IHtcblx0XHQnY29tbWVudCc6IFtcblx0XHRcdC9eOjouKi9tLFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qKXJlbVxcYig/OlteXiYpXFxyXFxuXXxcXF4oPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdsYWJlbCc6IHtcblx0XHRcdHBhdHRlcm46IC9eOi4qL20sXG5cdFx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHRcdH0sXG5cdFx0J2NvbW1hbmQnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEZPUiBjb21tYW5kXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopZm9yKD86ID9cXC9bYS16P10oPzpbIDpdKD86XCJbXlwiXSpcInxcXFMrKSk/KSogXFxTKyBpbiBcXChbXildK1xcKSBkby9pbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXmZvclxcYnxcXGIoPzppbnxkbylcXGIvaSxcblx0XHRcdFx0XHQnc3RyaW5nJzogc3RyaW5nLFxuXHRcdFx0XHRcdCdwYXJhbWV0ZXInOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0J3ZhcmlhYmxlJzogdmFyaWFibGUsXG5cdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWygpJyxdL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBJRiBjb21tYW5kXG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopaWYoPzogP1xcL1thLXo/XSg/OlsgOl0oPzpcIlteXCJdKlwifFxcUyspKT8pKiAoPzpub3QgKT8oPzpjbWRleHR2ZXJzaW9uIFxcZCt8ZGVmaW5lZCBcXHcrfGVycm9ybGV2ZWwgXFxkK3xleGlzdCBcXFMrfCg/OlwiW15cIl0qXCJ8XFxTKyk/KD86PT18ICg/OmVxdXxuZXF8bHNzfGxlcXxndHJ8Z2VxKSApKD86XCJbXlwiXSpcInxcXFMrKSkvaW0sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdrZXl3b3JkJzogL15pZlxcYnxcXGIoPzpub3R8Y21kZXh0dmVyc2lvbnxkZWZpbmVkfGVycm9ybGV2ZWx8ZXhpc3QpXFxiL2ksXG5cdFx0XHRcdFx0J3N0cmluZyc6IHN0cmluZyxcblx0XHRcdFx0XHQncGFyYW1ldGVyJzogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdCd2YXJpYWJsZSc6IHZhcmlhYmxlLFxuXHRcdFx0XHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0XHRcdFx0J29wZXJhdG9yJzogL1xcXnw9PXxcXGIoPzplcXV8bmVxfGxzc3xsZXF8Z3RyfGdlcSlcXGIvaVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBFTFNFIGNvbW1hbmRcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFsmKCldKVsgXFx0XSopZWxzZVxcYi9pbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXmVsc2VcXGIvaVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBTRVQgY29tbWFuZFxuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qKXNldCg/OiA/XFwvW2Etel0oPzpbIDpdKD86XCJbXlwiXSpcInxcXFMrKSk/KSogKD86W15eJilcXHJcXG5dfFxcXig/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXnNldFxcYi9pLFxuXHRcdFx0XHRcdCdzdHJpbmcnOiBzdHJpbmcsXG5cdFx0XHRcdFx0J3BhcmFtZXRlcic6IHBhcmFtZXRlcixcblx0XHRcdFx0XHQndmFyaWFibGUnOiBbXG5cdFx0XHRcdFx0XHR2YXJpYWJsZSxcblx0XHRcdFx0XHRcdC9cXHcrKD89KD86WypcXC8lK1xcLSZefF18PDx8Pj4pPz0pL1xuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvWypcXC8lK1xcLSZefF09P3w8PD0/fD4+PT98WyF+Xz1dLyxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWygpJyxdL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBPdGhlciBjb21tYW5kc1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qQD8pXFx3K1xcYig/OlwiKD86W1xcXFxcIl1cInxbXlwiXSkqXCIoPyFcIil8W15cIl4mKVxcclxcbl18XFxeKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQna2V5d29yZCc6IC9eXFx3K1xcYi9pLFxuXHRcdFx0XHRcdCdzdHJpbmcnOiBzdHJpbmcsXG5cdFx0XHRcdFx0J3BhcmFtZXRlcic6IHBhcmFtZXRlcixcblx0XHRcdFx0XHQnbGFiZWwnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKF5cXHMqKTpcXFMrL20sXG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCd2YXJpYWJsZSc6IHZhcmlhYmxlLFxuXHRcdFx0XHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0XHRcdFx0J29wZXJhdG9yJzogL1xcXi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J29wZXJhdG9yJzogL1smQF0vLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCknXS9cblx0fTtcbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=