(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1054"],{"43ed":function(e,r){Prism.languages.purebasic=Prism.languages.extend("clike",{comment:/;.*/,keyword:/\b(?:declarecdll|declaredll|compilerselect|compilercase|compilerdefault|compilerendselect|compilererror|enableexplicit|disableexplicit|not|and|or|xor|calldebugger|debuglevel|enabledebugger|disabledebugger|restore|read|includepath|includebinary|threaded|runtime|with|endwith|structureunion|endstructureunion|align|newlist|newmap|interface|endinterface|extends|enumeration|endenumeration|swap|foreach|continue|fakereturn|goto|gosub|return|break|module|endmodule|declaremodule|enddeclaremodule|declare|declarec|prototype|prototypec|enableasm|disableasm|dim|redim|data|datasection|enddatasection|to|procedurereturn|debug|default|case|select|endselect|as|import|endimport|importc|compilerif|compilerelse|compilerendif|compilerelseif|end|structure|endstructure|while|wend|for|next|step|if|else|elseif|endif|repeat|until|procedure|proceduredll|procedurec|procedurecdll|endprocedure|protected|shared|static|global|define|includefile|xincludefile|macro|endmacro)\b/i,function:/\b\w+(?:\.\w+)?\s*(?=\()/,number:/(?:\$[\da-f]+|\b-?\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/}),Prism.languages.insertBefore("purebasic","keyword",{tag:/#\w+/,asm:{pattern:/(^\s*)!.*/m,lookbehind:!0,alias:"tag",inside:{comment:/;.*/,string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"label-reference-anonymous":{pattern:/(\s*!\s*j[a-z]+\s+)@[fb]/i,lookbehind:!0,alias:"fasm-label"},"label-reference-addressed":{pattern:/(\s*!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,lookbehind:!0,alias:"fasm-label"},function:{pattern:/^(\s*!\s*)[\da-z]+(?=\s|$)/im,lookbehind:!0},"function-inline":{pattern:/(\s*:\s*)[\da-z]+(?=\s)/i,lookbehind:!0,alias:"function"},label:{pattern:/^(\s*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,lookbehind:!0,alias:"fasm-label"},keyword:[/(?:extern|extern|global)[^;\r\n]*/i,/(?:CPU|FLOAT|DEFAULT).*/],register:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s|mm\d+)\b/i,number:/(?:\b|-|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-/%<>=&|$!,.:]/}}}),delete Prism.languages.purebasic["class-name"],delete Prism.languages.purebasic["boolean"],Prism.languages.pbfasm=Prism.languages["purebasic"]}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB1cmViYXNpYy5qcyJdLCJuYW1lcyI6WyJQcmlzbSIsImxhbmd1YWdlcyIsInB1cmViYXNpYyIsImV4dGVuZCIsImluc2VydEJlZm9yZSIsInBhdHRlcm4iLCJsb29rYmVoaW5kIiwiYWxpYXMiLCJpbnNpZGUiLCJncmVlZHkiLCJwYmZhc20iXSwibWFwcGluZ3MiOiJtR0FTQUEsTUFBTUMsVUFBVUMsVUFBWUYsTUFBTUMsVUFBVUUsT0FBTyxRQUFTLENBQzNELFFBQVcsTUFDWCxRQUFXLCs3QkFDWCxTQUFZLDJCQUNaLE9BQVUsZ0RBQ1YsU0FBWSwyRUFHYkgsTUFBTUMsVUFBVUcsYUFBYSxZQUFhLFVBQVcsQ0FDcEQsSUFBTyxPQUNQLElBQU8sQ0FDTkMsUUFBUyxhQUNUQyxZQUFZLEVBQ1pDLE1BQU8sTUFDUEMsT0FBUSxDQUNQLFFBQVcsTUFDWCxPQUFVLENBQ1RILFFBQVMsb0NBQ1RJLFFBQVEsR0FHVCw0QkFBNkIsQ0FDNUJKLFFBQVMsNEJBQ1RDLFlBQVksRUFDWkMsTUFBTyxjQUdSLDRCQUE2QixDQUM1QkYsUUFBUyw0Q0FDVEMsWUFBWSxFQUNaQyxNQUFPLGNBRVIsU0FBWSxDQUNYRixRQUFTLCtCQUNUQyxZQUFZLEdBRWIsa0JBQW1CLENBQ2xCRCxRQUFTLDJCQUNUQyxZQUFZLEVBQ1pDLE1BQU8sWUFFUixNQUFTLENBQ1JGLFFBQVMsMkNBQ1RDLFlBQVksRUFDWkMsTUFBTyxjQUVSLFFBQVcsQ0FDVixxQ0FDQSwyQkFFRCxTQUFZLGdIQUNaLE9BQVUsZ0xBQ1YsU0FBWSxvQ0FLUlAsTUFBTUMsVUFBVUMsVUFBVSxxQkFDMUJGLE1BQU1DLFVBQVVDLFVBQVUsV0FFakNGLE1BQU1DLFVBQVVTLE9BQVNWLE1BQU1DLFVBQVUiLCJmaWxlIjoianMvY2h1bmstMmQwYzEwNTQuYTZjZWY1NDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuT3JpZ2luYWwgQ29kZSBieSBCYXMgR3Jvb3RoZWRkZVxuISFNQU5ZIFRIQU5LUyEhIEkgbmV2ZXIgd291bGQgaGF2ZSBtYWRlIHRoaXMsIHJlZ2V4IGFuZCBtZSB3aWxsIG5ldmVyIGJlIGJlc3QgZnJpZW5kcyA7KVxuPT0+IGh0dHBzOi8vY29kZXBlbi5pby9JbWFnaW5lUHJvZ3JhbW1pbmcvZGV0YWlscy9KWXlkQnkvXG5zbGlnaHRseSBjaGFuZ2VkIHRvIHBhc3MgYWxsIHRlc3RzXG4qL1xuXG5cbi8vIFB1cmVCYXNpYyBzdXBwb3J0LCBzdGVhbCBzdHVmZiBmcm9tIGFuc2ktY1xuUHJpc20ubGFuZ3VhZ2VzLnB1cmViYXNpYyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY29tbWVudCc6IC87LiovLFxuXHQna2V5d29yZCc6IC9cXGIoPzpkZWNsYXJlY2RsbHxkZWNsYXJlZGxsfGNvbXBpbGVyc2VsZWN0fGNvbXBpbGVyY2FzZXxjb21waWxlcmRlZmF1bHR8Y29tcGlsZXJlbmRzZWxlY3R8Y29tcGlsZXJlcnJvcnxlbmFibGVleHBsaWNpdHxkaXNhYmxlZXhwbGljaXR8bm90fGFuZHxvcnx4b3J8Y2FsbGRlYnVnZ2VyfGRlYnVnbGV2ZWx8ZW5hYmxlZGVidWdnZXJ8ZGlzYWJsZWRlYnVnZ2VyfHJlc3RvcmV8cmVhZHxpbmNsdWRlcGF0aHxpbmNsdWRlYmluYXJ5fHRocmVhZGVkfHJ1bnRpbWV8d2l0aHxlbmR3aXRofHN0cnVjdHVyZXVuaW9ufGVuZHN0cnVjdHVyZXVuaW9ufGFsaWdufG5ld2xpc3R8bmV3bWFwfGludGVyZmFjZXxlbmRpbnRlcmZhY2V8ZXh0ZW5kc3xlbnVtZXJhdGlvbnxlbmRlbnVtZXJhdGlvbnxzd2FwfGZvcmVhY2h8Y29udGludWV8ZmFrZXJldHVybnxnb3RvfGdvc3VifHJldHVybnxicmVha3xtb2R1bGV8ZW5kbW9kdWxlfGRlY2xhcmVtb2R1bGV8ZW5kZGVjbGFyZW1vZHVsZXxkZWNsYXJlfGRlY2xhcmVjfHByb3RvdHlwZXxwcm90b3R5cGVjfGVuYWJsZWFzbXxkaXNhYmxlYXNtfGRpbXxyZWRpbXxkYXRhfGRhdGFzZWN0aW9ufGVuZGRhdGFzZWN0aW9ufHRvfHByb2NlZHVyZXJldHVybnxkZWJ1Z3xkZWZhdWx0fGNhc2V8c2VsZWN0fGVuZHNlbGVjdHxhc3xpbXBvcnR8ZW5kaW1wb3J0fGltcG9ydGN8Y29tcGlsZXJpZnxjb21waWxlcmVsc2V8Y29tcGlsZXJlbmRpZnxjb21waWxlcmVsc2VpZnxlbmR8c3RydWN0dXJlfGVuZHN0cnVjdHVyZXx3aGlsZXx3ZW5kfGZvcnxuZXh0fHN0ZXB8aWZ8ZWxzZXxlbHNlaWZ8ZW5kaWZ8cmVwZWF0fHVudGlsfHByb2NlZHVyZXxwcm9jZWR1cmVkbGx8cHJvY2VkdXJlY3xwcm9jZWR1cmVjZGxsfGVuZHByb2NlZHVyZXxwcm90ZWN0ZWR8c2hhcmVkfHN0YXRpY3xnbG9iYWx8ZGVmaW5lfGluY2x1ZGVmaWxlfHhpbmNsdWRlZmlsZXxtYWNyb3xlbmRtYWNybylcXGIvaSxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPzpcXC5cXHcrKT9cXHMqKD89XFwoKS8sXG5cdCdudW1iZXInOiAvKD86XFwkW1xcZGEtZl0rfFxcYi0/XFxkKlxcLj9cXGQrKD86ZVsrLV0/XFxkKyk/KVxcYi9pLFxuXHQnb3BlcmF0b3InOiAvKD86QFxcKj98XFw/fFxcKilcXHcrfC1bPi1dP3xcXCtcXCs/fCE9P3w8PD89P3w+Pj89P3w9PT98JiY/fFxcfD9cXHx8W35eJT8qL0BdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3B1cmViYXNpYycsICdrZXl3b3JkJywge1xuXHQndGFnJzogLyNcXHcrLyxcblx0J2FzbSc6IHtcblx0XHRwYXR0ZXJuOiAvKF5cXHMqKSEuKi9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICd0YWcnLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2NvbW1lbnQnOiAvOy4qLyxcblx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oW1wiJ2BdKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvLyBBbm9ueW1vdXMgbGFiZWwgcmVmZXJlbmNlcywgaS5lLjogam1wIEBiXG5cdFx0XHQnbGFiZWwtcmVmZXJlbmNlLWFub255bW91cyc6IHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHMqIVxccypqW2Etel0rXFxzKylAW2ZiXS9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ2Zhc20tbGFiZWwnXG5cdFx0XHR9LFxuXHRcdFx0Ly8gTmFtZWQgbGFiZWwgcmVmZXJlbmNlLCBpLmUuOiBqbmUgbGFiZWwxXG5cdFx0XHQnbGFiZWwtcmVmZXJlbmNlLWFkZHJlc3NlZCc6IHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHMqIVxccypqW2Etel0rXFxzKylbQS1aLl8/JEBdW1xcdy4/JEB+I10qL2ksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnZmFzbS1sYWJlbCdcblx0XHRcdH0sXG5cdFx0XHQnZnVuY3Rpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eKFxccyohXFxzKilbXFxkYS16XSsoPz1cXHN8JCkvaW0sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQnZnVuY3Rpb24taW5saW5lJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxccyo6XFxzKilbXFxkYS16XSsoPz1cXHMpL2ksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0XHR9LFxuXHRcdFx0J2xhYmVsJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqIVxccyopW0EtWmEtei5fPyRAXVtcXHcuPyRAfiNdKig/PTopL20sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnZmFzbS1sYWJlbCdcblx0XHRcdH0sXG5cdFx0XHQna2V5d29yZCc6IFtcblx0XHRcdFx0Lyg/OmV4dGVybnxleHRlcm58Z2xvYmFsKVteO1xcclxcbl0qL2ksXG5cdFx0XHRcdC8oPzpDUFV8RkxPQVR8REVGQVVMVCkuKi9cblx0XHRcdF0sXG5cdFx0XHQncmVnaXN0ZXInOiAvXFxiKD86c3RcXGR8W3h5el1tbVxcZFxcZD98W2NkdF1yXFxkfHJcXGRcXGQ/W2J3ZF0/fFtlcl0/W2FiY2RdeHxbYWJjZF1baGxdfFtlcl0/KD86YnB8c3B8c2l8ZGkpfFtjZGVmZ3Ndc3xtbVxcZCspXFxiL2ksXG5cdFx0XHQnbnVtYmVyJzogLyg/OlxcYnwtfCg/PVxcJCkpKD86MFtoeF1bXFxkYS1mXSpcXC4/W1xcZGEtZl0rKD86cFsrLV0/XFxkKyk/fFxcZFtcXGRhLWZdK1toeF18XFwkXFxkW1xcZGEtZl0qfDBbb3FdWzAtN10rfFswLTddK1tvcV18MFtieV1bMDFdK3xbMDFdK1tieV18MFtkdF1cXGQrfFxcZCpcXC4/XFxkKyg/OlxcLj9lWystXT9cXGQrKT9bZHRdPylcXGIvaSxcblx0XHRcdCdvcGVyYXRvcic6IC9bXFxbXFxdKitcXC0vJTw+PSZ8JCEsLjpdL1xuXHRcdH1cblx0fVxufSk7XG5cbmRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMucHVyZWJhc2ljWydjbGFzcy1uYW1lJ107XG5kZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnB1cmViYXNpY1snYm9vbGVhbiddO1xuXG5QcmlzbS5sYW5ndWFnZXMucGJmYXNtID0gUHJpc20ubGFuZ3VhZ2VzWydwdXJlYmFzaWMnXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=