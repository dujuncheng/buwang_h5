(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd85d"],{"826c":function(n,e){(function(n){var e=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;function t(n){return n=n.replace(/<inner>/g,(function(){return e})),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+n+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|$)/.source.replace(/__/g,(function(){return a})),r=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+r+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+r+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+r+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(/(~~?)(?:(?!~)<inner>)+?\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(\[)[^\]]+(?=\]$)/,lookbehind:!0},content:{pattern:/(^!?\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),["url","bold","italic","strike"].forEach((function(e){["url","bold","italic","strike"].forEach((function(t){e!==t&&(n.languages.markdown[e].inside.content.inside[t]=n.languages.markdown[t])}))})),n.hooks.add("after-tokenize",(function(n){function e(n){if(n&&"string"!==typeof n)for(var t=0,a=n.length;t<a;t++){var i=n[t];if("code"===i.type){var r=i.content[1],o=i.content[3];if(r&&o&&"code-language"===r.type&&"code-block"===o.type&&"string"===typeof r.content){var l=r.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");l=(/[a-z][\w-]*/i.exec(l)||[""])[0].toLowerCase();var s="language-"+l;o.alias?"string"===typeof o.alias?o.alias=[o.alias,s]:o.alias.push(s):o.alias=[s]}}else e(i.content)}}"markdown"!==n.language&&"md"!==n.language||e(n.tokens)})),n.hooks.add("wrap",(function(e){if("code-block"===e.type){for(var t="",a=0,i=e.classes.length;a<i;a++){var r=e.classes[a],o=/language-(.+)/.exec(r);if(o){t=o[1];break}}var l=n.languages[t];if(l){var s=e.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&");e.content=n.highlight(s,l,t)}else if(t&&"none"!==t&&n.plugins.autoloader){var d="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());e.attributes["id"]=d,n.plugins.autoloader.loadLanguages(t,(function(){var e=document.getElementById(d);e&&(e.innerHTML=n.highlight(e.textContent,n.languages[t],t))}))}}})),n.languages.md=n.languages.markdown})(Prism)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmtkb3duLmpzIl0sIm5hbWVzIjpbIlByaXNtIiwiaW5uZXIiLCJzb3VyY2UiLCJjcmVhdGVJbmxpbmUiLCJwYXR0ZXJuIiwicmVwbGFjZSIsIlJlZ0V4cCIsInRhYmxlQ2VsbCIsInRhYmxlUm93IiwidGFibGVMaW5lIiwibGFuZ3VhZ2VzIiwibWFya2Rvd24iLCJleHRlbmQiLCJpbnNlcnRCZWZvcmUiLCJhbGlhcyIsImluc2lkZSIsImxvb2tiZWhpbmQiLCJncmVlZHkiLCJwdW5jdHVhdGlvbiIsImZvckVhY2giLCJ0b2tlbiIsImNvbnRlbnQiLCJob29rcyIsImFkZCIsImVudiIsIndhbGtUb2tlbnMiLCJ0b2tlbnMiLCJpIiwibCIsImxlbmd0aCIsInR5cGUiLCJjb2RlTGFuZyIsImNvZGVCbG9jayIsImxhbmciLCJleGVjIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwibGFuZ3VhZ2UiLCJjbGFzc2VzIiwiY2xzIiwibWF0Y2giLCJncmFtbWFyIiwiY29kZSIsImhpZ2hsaWdodCIsInBsdWdpbnMiLCJhdXRvbG9hZGVyIiwiaWQiLCJEYXRlIiwidmFsdWVPZiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImF0dHJpYnV0ZXMiLCJsb2FkTGFuZ3VhZ2VzIiwiZWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwibWQiXSwibWFwcGluZ3MiOiJvR0FBQyxTQUFVQSxHQUdWLElBQUlDLEVBQVEsNkNBQTZDQyxPQVl6RCxTQUFTQyxFQUFhQyxHQUVyQixPQURBQSxFQUFVQSxFQUFRQyxRQUFRLFlBQVksV0FBYyxPQUFPSixLQUNwREssT0FBTywwQkFBMEJKLE9BQVMsTUFBUUUsRUFBVSxLQUlwRSxJQUFJRyxFQUFZLDREQUE0REwsT0FDeEVNLEVBQVcsc0NBQXNDTixPQUFPRyxRQUFRLE9BQU8sV0FBYyxPQUFP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SUFBSUMsRUFBVXpDLEVBQU1VLFVBQVVxQixHQUU5QixHQUFLVSxFQVlFLENBRU4sSUFBSUMsRUFBT2xCLEVBQUlILFFBQVFoQixRQUFRLFFBQVMsS0FBS0EsUUFBUSxTQUFVLEtBRS9EbUIsRUFBSUgsUUFBVXJCLEVBQU0yQyxVQUFVRCxFQUFNRCxFQUFTVixRQWY3QyxHQUFJQSxHQUF5QixTQUFiQSxHQUF1Qi9CLEVBQU00QyxRQUFRQyxXQUFZLENBQ2hFLElBQUlDLEVBQUssT0FBUSxJQUFJQyxNQUFPQyxVQUFZLElBQU1DLEtBQUtDLE1BQXNCLEtBQWhCRCxLQUFLRSxVQUM5RDNCLEVBQUk0QixXQUFXLE1BQVFOLEVBRXZCOUMsRUFBTTRDLFFBQVFDLFdBQVdRLGNBQWN0QixHQUFVLFdBQ2hELElBQUl1QixFQUFNQyxTQUFTQyxlQUFlVixHQUM5QlEsSUFDSEEsRUFBSUcsVUFBWXpELEVBQU0yQyxVQUFVVyxFQUFJSSxZQUFhMUQsRUFBTVUsVUFBVXFCLEdBQVdBLFlBWWpGL0IsRUFBTVUsVUFBVWlELEdBQUszRCxFQUFNVSxVQUFVQyxVQWpWdEMsQ0FtVkVYIiwiZmlsZSI6ImpzL2NodW5rLTJkMGRkODVkLjI5ZTg2MmY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8vIEFsbG93IG9ubHkgb25lIGxpbmUgYnJlYWtcblx0dmFyIGlubmVyID0gLyg/OlxcXFwufFteXFxcXFxcblxccl18KD86XFxufFxcclxcbj8pKD8hXFxufFxcclxcbj8pKS8uc291cmNlO1xuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIGZvciB0aGUgY3JlYXRpb24gb2YgdGhlIGJvbGQgb3IgaXRhbGljIHBhdHRlcm4uXG5cdCAqXG5cdCAqIFRoaXMgYWxzbyBhZGRzIGEgbG9va2JlaGluZCBncm91cCB0byB0aGUgZ2l2ZW4gcGF0dGVybiB0byBlbnN1cmUgdGhhdCB0aGUgcGF0dGVybiBpcyBub3QgYmFja3NsYXNoLWVzY2FwZWQuXG5cdCAqXG5cdCAqIF9Ob3RlOl8gS2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBhZGRzIGEgY2FwdHVyaW5nIGdyb3VwLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuXHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlSW5saW5lKHBhdHRlcm4pIHtcblx0XHRwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC88aW5uZXI+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlubmVyOyB9KTtcblx0XHRyZXR1cm4gUmVnRXhwKC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKikvLnNvdXJjZSArICcoPzonICsgcGF0dGVybiArICcpJyk7XG5cdH1cblxuXG5cdHZhciB0YWJsZUNlbGwgPSAvKD86XFxcXC58YGAoPzpbXmBcXHJcXG5dfGAoPyFgKSkrYGB8YFteYFxcclxcbl0rYHxbXlxcXFx8XFxyXFxuYF0pKy8uc291cmNlO1xuXHR2YXIgdGFibGVSb3cgPSAvXFx8P19fKD86XFx8X18pK1xcfD8oPzooPzpcXG58XFxyXFxuPyl8JCkvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWJsZUNlbGw7IH0pO1xuXHR2YXIgdGFibGVMaW5lID0gL1xcfD9bIFxcdF0qOj8tezMsfTo/WyBcXHRdKig/OlxcfFsgXFx0XSo6Py17Myx9Oj9bIFxcdF0qKStcXHw/KD86XFxufFxcclxcbj8pLy5zb3VyY2U7XG5cblxuXHRQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmtkb3duJywgJ3Byb2xvZycsIHtcblx0XHQnYmxvY2txdW90ZSc6IHtcblx0XHRcdC8vID4gLi4uXG5cdFx0XHRwYXR0ZXJuOiAvXj4oPzpbXFx0IF0qPikqL20sXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH0sXG5cdFx0J3RhYmxlJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCdeJyArIHRhYmxlUm93ICsgdGFibGVMaW5lICsgJyg/OicgKyB0YWJsZVJvdyArICcpKicsICdtJyksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3RhYmxlLWRhdGEtcm93cyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ14oJyArIHRhYmxlUm93ICsgdGFibGVMaW5lICsgJykoPzonICsgdGFibGVSb3cgKyAnKSokJyksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd0YWJsZS1kYXRhJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAodGFibGVDZWxsKSxcblx0XHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFx8L1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J3RhYmxlLWxpbmUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCdeKCcgKyB0YWJsZVJvdyArICcpJyArIHRhYmxlTGluZSArICckJyksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXHx8Oj8tezMsfTo/L1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J3RhYmxlLWhlYWRlci1yb3cnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCdeJyArIHRhYmxlUm93ICsgJyQnKSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd0YWJsZS1oZWFkZXInOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCh0YWJsZUNlbGwpLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogJ2ltcG9ydGFudCcsXG5cdFx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcfC9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdjb2RlJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBQcmVmaXhlZCBieSA0IHNwYWNlcyBvciAxIHRhYiBhbmQgcHJlY2VkZWQgYnkgYW4gZW1wdHkgbGluZVxuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58XFxuKVsgXFx0XSpcXG58KD86XnxcXHJcXG4/KVsgXFx0XSpcXHJcXG4/KSg/OiB7NH18XFx0KS4rKD86KD86XFxufFxcclxcbj8pKD86IHs0fXxcXHQpLispKi8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGBjb2RlYFxuXHRcdFx0XHQvLyBgYGNvZGVgYFxuXHRcdFx0XHRwYXR0ZXJuOiAvYGAuKz9gYHxgW15gXFxyXFxuXStgLyxcblx0XHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gYGBgb3B0aW9uYWwgbGFuZ3VhZ2Vcblx0XHRcdFx0Ly8gY29kZSBibG9ja1xuXHRcdFx0XHQvLyBgYGBcblx0XHRcdFx0cGF0dGVybjogL15gYGBbXFxzXFxTXSo/XmBgYCQvbSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnY29kZS1ibG9jayc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eKGBgYC4qKD86XFxufFxcclxcbj8pKVtcXHNcXFNdKz8oPz0oPzpcXG58XFxyXFxuPyleYGBgJCkvbSxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdjb2RlLWxhbmd1YWdlJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL14oYGBgKS4rLyxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9gYGAvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCd0aXRsZSc6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gdGl0bGUgMVxuXHRcdFx0XHQvLyA9PT09PT09XG5cblx0XHRcdFx0Ly8gdGl0bGUgMlxuXHRcdFx0XHQvLyAtLS0tLS0tXG5cdFx0XHRcdHBhdHRlcm46IC9cXFMuKig/OlxcbnxcXHJcXG4/KSg/Oj09K3wtLSspKD89WyBcXHRdKiQpL20sXG5cdFx0XHRcdGFsaWFzOiAnaW1wb3J0YW50Jyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0cHVuY3R1YXRpb246IC89PSskfC0tKyQvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vICMgdGl0bGUgMVxuXHRcdFx0XHQvLyAjIyMjIyMgdGl0bGUgNlxuXHRcdFx0XHRwYXR0ZXJuOiAvKF5cXHMqKSMrLisvbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRwdW5jdHVhdGlvbjogL14jK3wjKyQvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCdocic6IHtcblx0XHRcdC8vICoqKlxuXHRcdFx0Ly8gLS0tXG5cdFx0XHQvLyAqICogKlxuXHRcdFx0Ly8gLS0tLS0tLS0tLS1cblx0XHRcdHBhdHRlcm46IC8oXlxccyopKFsqLV0pKD86W1xcdCBdKlxcMil7Mix9KD89XFxzKiQpL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHRcdCdsaXN0Jzoge1xuXHRcdFx0Ly8gKiBpdGVtXG5cdFx0XHQvLyArIGl0ZW1cblx0XHRcdC8vIC0gaXRlbVxuXHRcdFx0Ly8gMS4gaXRlbVxuXHRcdFx0cGF0dGVybjogLyheXFxzKikoPzpbKistXXxcXGQrXFwuKSg/PVtcXHQgXS4pL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHRcdCd1cmwtcmVmZXJlbmNlJzoge1xuXHRcdFx0Ly8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tIFwiT3B0aW9uYWwgdGl0bGVcIlxuXHRcdFx0Ly8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tICdPcHRpb25hbCB0aXRsZSdcblx0XHRcdC8vIFtpZF06IGh0dHA6Ly9leGFtcGxlLmNvbSAoT3B0aW9uYWwgdGl0bGUpXG5cdFx0XHQvLyBbaWRdOiA8aHR0cDovL2V4YW1wbGUuY29tPiBcIk9wdGlvbmFsIHRpdGxlXCJcblx0XHRcdHBhdHRlcm46IC8hP1xcW1teXFxdXStcXF06W1xcdCBdKyg/OlxcUyt8PCg/OlxcXFwufFtePlxcXFxdKSs+KSg/OltcXHQgXSsoPzpcIig/OlxcXFwufFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwufFteJ1xcXFxdKSonfFxcKCg/OlxcXFwufFteKVxcXFxdKSpcXCkpKT8vLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCd2YXJpYWJsZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXighP1xcWylbXlxcXV0rLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdzdHJpbmcnOiAvKD86XCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwifCcoPzpcXFxcLnxbXidcXFxcXSkqJ3xcXCgoPzpcXFxcLnxbXilcXFxcXSkqXFwpKSQvLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXltcXFtcXF0hOl18Wzw+XS9cblx0XHRcdH0sXG5cdFx0XHRhbGlhczogJ3VybCdcblx0XHR9LFxuXHRcdCdib2xkJzoge1xuXHRcdFx0Ly8gKipzdHJvbmcqKlxuXHRcdFx0Ly8gX19zdHJvbmdfX1xuXG5cdFx0XHQvLyBhbGxvdyBvbmUgbmVzdGVkIGluc3RhbmNlIG9mIGl0YWxpYyB0ZXh0IHVzaW5nIHRoZSBzYW1lIGRlbGltaXRlclxuXHRcdFx0cGF0dGVybjogY3JlYXRlSW5saW5lKC9cXGJfXyg/Oig/IV8pPGlubmVyPnxfKD86KD8hXyk8aW5uZXI+KStfKStfX1xcYnxcXCpcXCooPzooPyFcXCopPGlubmVyPnxcXCooPzooPyFcXCopPGlubmVyPikrXFwqKStcXCpcXCovLnNvdXJjZSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXi4uKVtcXHNcXFNdKyg/PS4uJCkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcblx0XHRcdFx0fSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcKlxcKnxfXy9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdpdGFsaWMnOiB7XG5cdFx0XHQvLyAqZW0qXG5cdFx0XHQvLyBfZW1fXG5cblx0XHRcdC8vIGFsbG93IG9uZSBuZXN0ZWQgaW5zdGFuY2Ugb2YgYm9sZCB0ZXh0IHVzaW5nIHRoZSBzYW1lIGRlbGltaXRlclxuXHRcdFx0cGF0dGVybjogY3JlYXRlSW5saW5lKC9cXGJfKD86KD8hXyk8aW5uZXI+fF9fKD86KD8hXyk8aW5uZXI+KStfXykrX1xcYnxcXCooPzooPyFcXCopPGlubmVyPnxcXCpcXCooPzooPyFcXCopPGlubmVyPikrXFwqXFwqKStcXCovLnNvdXJjZSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXi4pW1xcc1xcU10rKD89LiQpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGluc2lkZToge30gLy8gc2VlIGJlbG93XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bKl9dL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3N0cmlrZSc6IHtcblx0XHRcdC8vIH5+c3RyaWtlIHRocm91Z2h+flxuXHRcdFx0Ly8gfnN0cmlrZX5cblx0XHRcdHBhdHRlcm46IGNyZWF0ZUlubGluZSgvKH5+PykoPzooPyF+KTxpbm5lcj4pKz9cXDIvLnNvdXJjZSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdjb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXn5+PylbXFxzXFxTXSsoPz1cXDEkKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvfn4/L1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdC8vIFtleGFtcGxlXShodHRwOi8vZXhhbXBsZS5jb20gXCJPcHRpb25hbCB0aXRsZVwiKVxuXHRcdFx0Ly8gW2V4YW1wbGVdW2lkXVxuXHRcdFx0Ly8gW2V4YW1wbGVdIFtpZF1cblx0XHRcdHBhdHRlcm46IGNyZWF0ZUlubGluZSgvIT9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKD86XFwoW15cXHMpXSsoPzpbXFx0IF0rXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiKT9cXCl8ID9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKS8uc291cmNlKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3ZhcmlhYmxlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxbKVteXFxdXSsoPz1cXF0kKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnY29udGVudCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKF4hP1xcWylbXlxcXV0rKD89XFxdKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9cIig/OlxcXFwufFteXCJcXFxcXSkqXCIoPz1cXCkkKS9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Wyd1cmwnLCAnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtlJ10uZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRbJ3VybCcsICdib2xkJywgJ2l0YWxpYycsICdzdHJpa2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChpbnNpZGUpIHtcblx0XHRcdGlmICh0b2tlbiAhPT0gaW5zaWRlKSB7XG5cdFx0XHRcdFByaXNtLmxhbmd1YWdlcy5tYXJrZG93blt0b2tlbl0uaW5zaWRlLmNvbnRlbnQuaW5zaWRlW2luc2lkZV0gPSBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25baW5zaWRlXTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSAnbWFya2Rvd24nICYmIGVudi5sYW5ndWFnZSAhPT0gJ21kJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG5cdFx0XHRpZiAoIXRva2VucyB8fCB0eXBlb2YgdG9rZW5zID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuXHRcdFx0XHRcdHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKlxuXHRcdFx0XHQgKiBBZGQgdGhlIGNvcnJlY3QgYGxhbmd1YWdlLXh4eHhgIGNsYXNzIHRvIHRoaXMgY29kZSBibG9jay4gS2VlcCBpbiBtaW5kIHRoYXQgdGhlIGBjb2RlLWxhbmd1YWdlYCB0b2tlblxuXHRcdFx0XHQgKiBpcyBvcHRpb25hbC4gQnV0IHRoZSBncmFtbWFyIGlzIGRlZmluZWQgc28gdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBjYXNlIHdlIGhhdmUgdG8gaGFuZGxlOlxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiB0b2tlbi5jb250ZW50ID0gW1xuXHRcdFx0XHQgKiAgICAgPHNwYW4gY2xhc3M9XCJwdW5jdHVhdGlvblwiPmBgYDwvc3Bhbj4sXG5cdFx0XHRcdCAqICAgICA8c3BhbiBjbGFzcz1cImNvZGUtbGFuZ3VhZ2VcIj54eHh4PC9zcGFuPixcblx0XHRcdFx0ICogICAgICdcXG4nLCAvLyBleGFjdGx5IG9uZSBuZXcgbGluZXMgKFxcciBvciBcXG4gb3IgXFxyXFxuKVxuXHRcdFx0XHQgKiAgICAgPHNwYW4gY2xhc3M9XCJjb2RlLWJsb2NrXCI+Li4uPC9zcGFuPixcblx0XHRcdFx0ICogICAgICdcXG4nLCAvLyBleGFjdGx5IG9uZSBuZXcgbGluZXMgYWdhaW5cblx0XHRcdFx0ICogICAgIDxzcGFuIGNsYXNzPVwicHVuY3R1YXRpb25cIj5gYGA8L3NwYW4+XG5cdFx0XHRcdCAqIF07XG5cdFx0XHRcdCAqL1xuXG5cdFx0XHRcdHZhciBjb2RlTGFuZyA9IHRva2VuLmNvbnRlbnRbMV07XG5cdFx0XHRcdHZhciBjb2RlQmxvY2sgPSB0b2tlbi5jb250ZW50WzNdO1xuXG5cdFx0XHRcdGlmIChjb2RlTGFuZyAmJiBjb2RlQmxvY2sgJiZcblx0XHRcdFx0XHRjb2RlTGFuZy50eXBlID09PSAnY29kZS1sYW5ndWFnZScgJiYgY29kZUJsb2NrLnR5cGUgPT09ICdjb2RlLWJsb2NrJyAmJlxuXHRcdFx0XHRcdHR5cGVvZiBjb2RlTGFuZy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0Ly8gdGhpcyBtaWdodCBiZSBhIGxhbmd1YWdlIHRoYXQgUHJpc20gZG9lcyBub3Qgc3VwcG9ydFxuXG5cdFx0XHRcdFx0Ly8gZG8gc29tZSByZXBsYWNlbWVudHMgdG8gc3VwcG9ydCBDKyssIEMjLCBhbmQgRiNcblx0XHRcdFx0XHR2YXIgbGFuZyA9IGNvZGVMYW5nLmNvbnRlbnQucmVwbGFjZSgvXFxiIy9nLCAnc2hhcnAnKS5yZXBsYWNlKC9cXGJcXCtcXCsvZywgJ3BwJylcblx0XHRcdFx0XHQvLyBvbmx5IHVzZSB0aGUgZmlyc3Qgd29yZFxuXHRcdFx0XHRcdGxhbmcgPSAoL1thLXpdW1xcdy1dKi9pLmV4ZWMobGFuZykgfHwgWycnXSlbMF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHR2YXIgYWxpYXMgPSAnbGFuZ3VhZ2UtJyArIGxhbmc7XG5cblx0XHRcdFx0XHQvLyBhZGQgYWxpYXNcblx0XHRcdFx0XHRpZiAoIWNvZGVCbG9jay5hbGlhcykge1xuXHRcdFx0XHRcdFx0Y29kZUJsb2NrLmFsaWFzID0gW2FsaWFzXTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb2RlQmxvY2suYWxpYXMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRjb2RlQmxvY2suYWxpYXMgPSBbY29kZUJsb2NrLmFsaWFzLCBhbGlhc107XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvZGVCbG9jay5hbGlhcy5wdXNoKGFsaWFzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0aWYgKGVudi50eXBlICE9PSAnY29kZS1ibG9jaycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZUxhbmcgPSAnJztcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IGVudi5jbGFzc2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0dmFyIGNscyA9IGVudi5jbGFzc2VzW2ldO1xuXHRcdFx0dmFyIG1hdGNoID0gL2xhbmd1YWdlLSguKykvLmV4ZWMoY2xzKTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRjb2RlTGFuZyA9IG1hdGNoWzFdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tjb2RlTGFuZ107XG5cblx0XHRpZiAoIWdyYW1tYXIpIHtcblx0XHRcdGlmIChjb2RlTGFuZyAmJiBjb2RlTGFuZyAhPT0gJ25vbmUnICYmIFByaXNtLnBsdWdpbnMuYXV0b2xvYWRlcikge1xuXHRcdFx0XHR2YXIgaWQgPSAnbWQtJyArIG5ldyBEYXRlKCkudmFsdWVPZigpICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWUxNik7XG5cdFx0XHRcdGVudi5hdHRyaWJ1dGVzWydpZCddID0gaWQ7XG5cblx0XHRcdFx0UHJpc20ucGx1Z2lucy5hdXRvbG9hZGVyLmxvYWRMYW5ndWFnZXMoY29kZUxhbmcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHRcdGlmIChlbGUpIHtcblx0XHRcdFx0XHRcdGVsZS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQoZWxlLnRleHRDb250ZW50LCBQcmlzbS5sYW5ndWFnZXNbY29kZUxhbmddLCBjb2RlTGFuZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcmV2ZXJzZSBQcmlzbS51dGlsLmVuY29kZVxuXHRcdFx0dmFyIGNvZGUgPSBlbnYuY29udGVudC5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcblxuXHRcdFx0ZW52LmNvbnRlbnQgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgZ3JhbW1hciwgY29kZUxhbmcpO1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLm1kID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9