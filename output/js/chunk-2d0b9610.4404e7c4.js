(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9610"],{3360:function(n,e){!function(n){var e={pattern:/\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,alias:"constant",inside:{punctuation:/[{}]/}};n.languages["solution-file"]={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0,inside:{guid:e}},object:{pattern:/^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,lookbehind:!0,greedy:!0,alias:"keyword"},property:{pattern:/^([ \t]*)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,lookbehind:!0,inside:{guid:e}},guid:e,number:/\b\d+(?:\.\d+)*\b/,boolean:/\b(?:FALSE|TRUE)\b/,operator:/=/,punctuation:/[(),]/},n.languages.sln=n.languages["solution-file"]}(Prism)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNvbHV0aW9uLWZpbGUubWluLmpzIl0sIm5hbWVzIjpbIm4iLCJ0IiwicGF0dGVybiIsImFsaWFzIiwiaW5zaWRlIiwicHVuY3R1YXRpb24iLCJsYW5ndWFnZXMiLCJjb21tZW50IiwiZ3JlZWR5Iiwic3RyaW5nIiwiZ3VpZCIsIm9iamVjdCIsImxvb2tiZWhpbmQiLCJwcm9wZXJ0eSIsIm51bWJlciIsImJvb2xlYW4iLCJvcGVyYXRvciIsInNsbiIsIlByaXNtIl0sIm1hcHBpbmdzIjoia0dBQUMsU0FBU0EsR0FBRyxJQUFJQyxFQUFFLENBQUNDLFFBQVEsK0RBQStEQyxNQUFNLFdBQVdDLE9BQU8sQ0FBQ0MsWUFBWSxTQUFTTCxFQUFFTSxVQUFVLGlCQUFpQixDQUFDQyxRQUFRLENBQUNMLFFBQVEsTUFBTU0sUUFBTyxHQUFJQyxPQUFPLENBQUNQLFFBQVEsMEJBQTBCTSxRQUFPLEVBQUdKLE9BQU8sQ0FBQ00sS0FBS1QsSUFBSVUsT0FBTyxDQUFDVCxRQUFRLGtIQUFrSFUsWUFBVyxFQUFHSixRQUFPLEVBQUdMLE1BQU0sV0FBV1UsU0FBUyxDQUFDWCxRQUFRLDRDQUE0Q1UsWUFBVyxFQUFHUixPQUFPLENBQUNNLEtBQUtULElBQUlTLEtBQUtULEVBQUVhLE9BQU8sb0JBQW9CQyxRQUFRLHFCQUFxQkMsU0FBUyxJQUFJWCxZQUFZLFNBQVNMLEVBQUVNLFVBQVVXLElBQUlqQixFQUFFTSxVQUFVLGlCQUFscEIsQ0FBb3FCWSIsImZpbGUiOiJqcy9jaHVuay0yZDBiOTYxMC40NDA0ZTdjNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihuKXt2YXIgdD17cGF0dGVybjovXFx7W1xcZGEtZl17OH0tW1xcZGEtZl17NH0tW1xcZGEtZl17NH0tW1xcZGEtZl17NH0tW1xcZGEtZl17MTJ9XFx9L2ksYWxpYXM6XCJjb25zdGFudFwiLGluc2lkZTp7cHVuY3R1YXRpb246L1t7fV0vfX07bi5sYW5ndWFnZXNbXCJzb2x1dGlvbi1maWxlXCJdPXtjb21tZW50OntwYXR0ZXJuOi8jLiovLGdyZWVkeTohMH0sc3RyaW5nOntwYXR0ZXJuOi9cIlteXCJcXHJcXG5dKlwifCdbXidcXHJcXG5dKicvLGdyZWVkeTohMCxpbnNpZGU6e2d1aWQ6dH19LG9iamVjdDp7cGF0dGVybjovXihbIFxcdF0qKSg/OihbQS1aXVxcdyopXFxiKD89LiooPzpcXHJcXG4/fFxcbikoPzpcXDFbIFxcdF0uKig/Olxcclxcbj98XFxuKSkqXFwxRW5kXFwyKD89WyBcXHRdKiQpKXxFbmRbQS1aXVxcdyooPz1bIFxcdF0qJCkpL20sbG9va2JlaGluZDohMCxncmVlZHk6ITAsYWxpYXM6XCJrZXl3b3JkXCJ9LHByb3BlcnR5OntwYXR0ZXJuOi9eKFsgXFx0XSopW15cXHJcXG5cIiM9KCldKlteXFxzXCIjPSgpXSg/PVxccyo9KS9tLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntndWlkOnR9fSxndWlkOnQsbnVtYmVyOi9cXGJcXGQrKD86XFwuXFxkKykqXFxiLyxib29sZWFuOi9cXGIoPzpGQUxTRXxUUlVFKVxcYi8sb3BlcmF0b3I6Lz0vLHB1bmN0dWF0aW9uOi9bKCksXS99LG4ubGFuZ3VhZ2VzLnNsbj1uLmxhbmd1YWdlc1tcInNvbHV0aW9uLWZpbGVcIl19KFByaXNtKTsiXSwic291cmNlUm9vdCI6IiJ9