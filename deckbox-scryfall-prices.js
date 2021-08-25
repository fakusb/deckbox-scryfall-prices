// ==UserScript==
// @name         Cardmarket prices on Deckbox
// @namespace    http://deckbox.org/
// @version      0.1
// @description  Display Cardmarket prizes in during deckbuilding on Deckbox
// @author       Fabian Kunze
// @match        *://deckbox.org/sets/*
// @icon         data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAqBAAAJ4EAAAwMAAAAQAgAKglAABGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnHgAyfkAl15NeR/qTXkf6k15H+pNeR/qTXkf6k15H+pNeR/qTXkf6k15H+pNeR/p+QCXXZx4AMgAAAAAAAAAAaiICcreVhf/38/H/2sjA/9rIwP/ayMD/2sjA/9rIwP/o3dj/9/Px//fz8f/38/H/t5WF/2oiAnIAAAAAAAAAAGoiAnLLsqf/2sjA/35AJf+TXkf6k15H+pNeR/p+QCX/t5WF/////////////////8itov9qIgJyAAAAAAAAAABqIgJyy7Kn/9rIwP+TXkf69/Px//fz8f/ayMD/fkAl/9rIwP/////////////////IraL/aiICcgAAAAAAAAAAaiICcsuyp//ayMD/o3Zi////////////9/Px/6N2Yv+jdmL/9/Px////////////yK2i/2oiAnIAAAAAAAAAAGoiAnLLsqf/2sjA/5NeR/q3lYX/y7Kn///////38/H/o3Zi/6N2Yv/38/H//////8itov9qIgJyAAAAAAAAAABqIgJyy7Kn/9rIwP9tJwn/k15H+suyp//IraL/9/Px//fz8f+jdmL/o3Zi//fz8f/IraL/aiICcgAAAAAAAAAAaiICcsuyp//o3dj/o3Zi/8itov9+QCX/bScJ/7eVhf/38/H/9/Px/7eVhf/o3dj/y7Kn/2oiAnIAAAAAAAAAAGoiAnLIraL//////9rIwP9+QCX/aB8A/2gfAP9tJwn/t5WF//fz8f/o3dj/9/Px/8itov9qIgJyAAAAAAAAAABqIgJyyK2i///////ayMD/fkAl/2gfAP9oHwD/aB8A/20nCf+jdmL/k15H+trIwP/Lsqf/aiICcgAAAAAAAAAAaiICcsitov///////////9rIwP9+QCX/aB8A/2gfAP9oHwD/aB8A/20nCf/ayMD/y7Kn/2oiAnIAAAAAAAAAAGoiAnLIraL/////////////////2sjA/35AJf9oHwD/aB8A/2gfAP9tJwn/2sjA/8uyp/9qIgJyAAAAAAAAAABqIgJyyK2i//////////////////////+3lYX/aB8A/2gfAP9oHwD/bScJ/9rIwP/Lsqf/aiICcgAAAAAAAAAAaiICcsitov/////////////////38/H/o3Zi/35AJf9+QCX/fkAl/35AJf/o3dj/y7Kn/2oiAnIAAAAAAAAAAGoiAnK3lYX/9/Px//fz8f/38/H/9/Px/+jd2P/o3dj/6N3Y/+jd2P/o3dj/9/Px/7eVhf9qIgJyAAAAAAAAAABnHgAyfkAl15NeR/qTXkf6k15H+pNeR/qTXkf6k15H+pNeR/qTXkf6k15H+pNeR/p+QCXXZx4AMgAAAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAKAAAACAAAABAAAAAAQAgAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkhARFpIACCZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mkgAIJpIQERAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSAAgmkhAv+OWED/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+OWED/aSEC/2kgAIIAAAAAAAAAAAAAAAAAAAAAAAAAAGkhAQ1mHADQjlhA//bx7/////////////////////////////////////////////////////////////////////////////////////////////////////////////bx7/+OWED/ZhwA0GkhAQ0AAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln/////////////////7eXh/9rIwP/ayMD/2sjA/9rIwP/ayMD/2sjA/9rIwP/ayMD/2sjA/9rIwP/28e///////////////////////////////////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf///////////9rIwP9+QCX/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/8Gjlv//////////////////////////////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////s45+/2khAv+OWED/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/fkAl/2khAv9pIQL/2sjA//////////////////////////////////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln///////////+zjn7/aSEC/8Gjlv///////////////////////////8Gjlv9pIQL/fkAl/8Gjlv///////////////////////////////////////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf///////////7OOfv9pIQL/waOW////////////////////////////s45+/2khAv+OWED/7eXh////////////////////////////////////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////s45+/2khAv/Bo5b////////////////////////////t5eH/jlhA/2khAv+dbln/7eXh//////////////////////////////////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln///////////+zjn7/aSEC/8Gjlv/////////////////////////////////t5eH/jlhA/2khAv+dbln/7eXh/////////////////////////////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf///////////7OOfv9pIQL/waOW///////Bo5b/s45+//bx7//////////////////t5eH/jlhA/2khAv+dbln/7eXh////////////////////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////s45+/2khAv/Bo5b/s45+/2khAv9+QCX/9vHv///////////////////////t5eH/jlhA/2khAv+dbln/7eXh//////////////////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln///////////+zjn7/aSEC/35AJf9pIQL/fkAl/9rIwP/28e//7eXh//bx7//////////////////t5eH/jlhA/2khAv+dbln/7eXh/////////////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf///////////7OOfv9pIQL/aSEC/35AJf/ayMD/9vHv/51uWf9+QCX/s45+//bx7//////////////////t5eH/jlhA/2khAv+dbln/7eXh////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////s45+/2khAv9+QCX/2sjA//bx7/+dbln/aSEC/2khAv9pIQL/s45+//bx7//////////////////t5eH/jlhA/2khAv+zjn7///////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln////////////t5eH/s45+/9rIwP/t5eH/nW5Z/2khAv9pIQL/aSEC/2khAv9pIQL/s45+//bx7//////////////////t5eH/s45+/9rIwP///////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf//////////////////////7eXh/45YQP9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/s45+//bx7///////////////////////////////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z//////////////////////+dbln/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/s45+//bx7///////9vHv/8Gjlv/t5eH///////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln//////////////////////51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/s45+/+3l4f+zjn7/aSEC/8Gjlv///////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf//////////////////////7eXh/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/fkAl/2khAv9pIQL/waOW////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////////////////////7eXh/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv/Bo5b///////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln/////////////////////////////////7eXh/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/8Gjlv///////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf//////////////////////////////////////7eXh/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/waOW////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////////////////////////////////////7eXh/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv/Bo5b///////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln/////////////////////////////////////////////////7eXh/45YQP9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/8Gjlv///////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf/////////////////////////////////////////////////28e//nW5Z/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/waOW////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhARFmHADQnW5Z////////////////////////////////////////////9vHv/51uWf9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv9pIQL/aSEC/2khAv/Bo5b///////////+dbln/ZhwA0GkhAREAAAAAAAAAAAAAAAAAAAAAaSEBEWYcANCdbln////////////////////////////////////////////t5eH/jlhA/35AJf9+QCX/fkAl/35AJf9+QCX/fkAl/35AJf9+QCX/jlhA/9rIwP///////////51uWf9mHADQaSEBEQAAAAAAAAAAAAAAAAAAAABpIQERZhwA0J1uWf/////////////////////////////////////////////////28e//9vHv//bx7//28e//9vHv//bx7//28e//9vHv//bx7//28e//////////////////nW5Z/2YcANBpIQERAAAAAAAAAAAAAAAAAAAAAGkhAQ1mHADQjlhA//bx7/////////////////////////////////////////////////////////////////////////////////////////////////////////////bx7/+OWED/ZhwA0GkhAQ0AAAAAAAAAAAAAAAAAAAAAAAAAAGkgAIJpIQL/jlhA/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/nW5Z/51uWf+dbln/jlhA/2khAv9pIACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBEWkgAIJmHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuZhwA7mYcAO5mHADuaSAAgmkhAREAAAAAAAAAAAAAAADwAAAP4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH4AAAB+AAAAfgAAAH8AAADygAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpIQFDaSEBuWkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEBuWkhAUMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkhAUNpIQHmaB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2khAeZpIQFDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBFmkhAbloHwD/fD0h/6V5Zv+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+leWb/fD0h/2gfAP9pIQG5aSEBFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBQ2gfAP9wKw3/0720////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0720/3ArDf9oHwD/aSEBQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc///////////////////////r4dz/0720/9O9tP/TvbT/0720/9O9tP/TvbT/0720/9O9tP/TvbT/0720/9O9tP/TvbT/0720/9O9tP/TvbT/6+Hc////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////9O9tP98PSH/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/kl5G/+vh3P//////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////5JeRv9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/cCsN/+vh3P//////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/6V5Zv+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/98PSH/aB8A/2gfAP9oHwD/pXlm//n19P//////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P///////////////////////////////////////////9O9tP9wKw3/aB8A/2gfAP+leWb/+fX0////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P//////////////////////////////////////+fX0/5JeRv9oHwD/aB8A/6V5Zv/59fT/////////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P///////////////////////////////////////////5JeRv9oHwD/aB8A/5JeRv/r4dz/////////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P///////////////////////////////////////////+vh3P98PSH/aB8A/2gfAP+SXkb/6+Hc////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P/////////////////////////////////////////////////r4dz/fD0h/2gfAP9oHwD/kl5G/+vh3P//////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P//////////////////////////////////////////////////////0720/3w9If9oHwD/aB8A/5JeRv/r4dz/////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P//////+fX0/9O9tP+2k4P/+fX0/////////////////////////////////9O9tP98PSH/aB8A/2gfAP+SXkb/6+Hc////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/+vh3P//////tpOD/3ArDf9oHwD/tpOD///////////////////////////////////////TvbT/fD0h/2gfAP9oHwD/kl5G/+vh3P//////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////+fX0/5JeRv9oHwD/cCsN/9O9tP+2k4P/cCsN/2gfAP9wKw3/0720////////////////////////////////////////////0720/3w9If9oHwD/aB8A/5JeRv/r4dz/////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////5JeRv9oHwD/cCsN/5JeRv9wKw3/aB8A/3ArDf+2k4P/+fX0/////////////////////////////////////////////////9O9tP98PSH/aB8A/2gfAP+SXkb/6+Hc////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////5JeRv9oHwD/aB8A/2gfAP9oHwD/cCsN/7aTg//59fT//////9O9tP+leWb/tpOD//n19P/////////////////////////////////TvbT/fD0h/2gfAP9oHwD/kl5G/+vh3P//////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////5JeRv9oHwD/aB8A/2gfAP9wKw3/tpOD//n19P//////0720/3ArDf9oHwD/aB8A/6V5Zv/59fT/////////////////////////////////0720/3w9If9oHwD/aB8A/5JeRv/r4dz/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////5JeRv9oHwD/aB8A/3ArDf+2k4P/+fX0//////+2k4P/cCsN/2gfAP9oHwD/aB8A/2gfAP+leWb/+fX0/////////////////////////////////9O9tP98PSH/aB8A/2gfAP+leWb/+fX0////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////7aTg/9oHwD/cCsN/7aTg//59fT//////7aTg/9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/pXlm//n19P/////////////////////////////////TvbT/fD0h/2gfAP+SXkb/+fX0////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc//////////////////n19P/TvbT/0720//n19P/59fT/tpOD/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/6V5Zv/59fT/////////////////////////////////6+Hc/7aTg//r4dz/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc//////////////////////////////////n19P+2k4P/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/3ArDf+leWb/+fX0////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////+fX0/7aTg/9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/pXlm//n19P//////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////0720/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/6V5Zv/59fT/////////////////0720/6V5Zv/TvbT/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////6+Hc/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/+fX0///////TvbT/fD0h/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////////////////////7aTg/9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9wKw3/pXlm/9O9tP98PSH/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc//////////////////////////////////////+2k4P/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/cCsN/3ArDf9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////tpOD/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////+fX0/7aTg/9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc//////////////////////////////////////////////////////+2k4P/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////////////////////tpOD/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////////////////////////////////////////////////////7aTg/9wKw3/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc//////////////////////////////////////////////////////////////////////+2k4P/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc///////////////////////////////////////////////////////////////////////59fT/tpOD/3ArDf9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////////////////////////////////////+fX0/6V5Zv9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////////////////////////////////////0720/3w9If9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc///////////////////////////////////////////////////////////////////////TvbT/cCsN/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////////////////////////////////////////////////////+vh3P98PSH/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP+leWb/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc/////////////////////////////////////////////////////////////////+vh3P+SXkb/fD0h/3w9If98PSH/fD0h/3w9If98PSH/fD0h/3w9If98PSH/fD0h/3w9If98PSH/fD0h/5JeRv/r4dz/////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc///////////////////////////////////////////////////////////////////////59fT/+fX0//n19P/59fT/+fX0//n19P/59fT/+fX0//n19P/59fT/+fX0//n19P/59fT/+fX0//n19P//////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBXGgfAP98PSH/6+Hc////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6+Hc/3w9If9oHwD/aSEBXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBQ2gfAP9wKw3/0720////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0720/3ArDf9oHwD/aSEBQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaSEBFmkhAbloHwD/fD0h/6V5Zv+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+2k4P/tpOD/7aTg/+leWb/fD0h/2gfAP9pIQG5aSEBFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkhAUNpIQHmaB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2gfAP9oHwD/aB8A/2khAeZpIQFDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpIQFDaSEBuWkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEB5mkhAeZpIQHmaSEBuWkhAUMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAAAAH8AAPwAAAAAPwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPgAAAAAHwAA+AAAAAAfAAD4AAAAAB8AAPwAAAAAPwAA/gAAAAB/AAA=
// @grant        GM_xmlhttpRequest
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://unpkg.com/dexie@latest/dist/dexie.js
// @connect api.scryfall.com
// ==/UserScript==

'use strict';


// import Jquery
/* globals jQuery, $, waitForKeyElements, Dexie */
this.$ = this.jQuery = jQuery.noConflict(true);


//create DB for caching prices
var db = new Dexie("scryfall_responses");
db.version(1).stores({cards: 'name, eur, timestamp'});

var queue = [];

work();

var mutOb = new MutationObserver(function(mutationsList, observer){console.log("bla");work();});
mutOb.observe($("#content")[0].children[1],{ attributes: true, childList: true, subtree: true });

//$('#content').click(function(){
 //   work()
//});


//--- Narrow the container down AMAP.


function work(){

    // [{name:'cardname',cell:$canEditWithJQuery}]

    $("table").each(function(index,table){
        var curHeader = $(table).find("tr:first");
        var priceHeader = curHeader.find("th :contains(Price), th :contains(Avg)");
        var nameHeader = curHeader.find("th :contains(Name)");

        if(priceHeader.length != 1 || nameHeader.length != 1){
            console.log("Not a table for prices, "+priceHeader.length+" "+nameHeader.length);
            return;
        }
        var nameIndex = nameHeader.closest('th').index()
        var priceIndex = priceHeader.closest('th').index()

        //console.log("nameIndex: "+nameIndex);
        //console.log("priceIndex: "+priceIndex);

        $(table).find("tr").each(function(index,row){
            var name = $(row).find("td:eq("+nameIndex+")").find("a").text();
            if (name == "")
            { return; }

            var price = $(row).find("td:eq("+priceIndex+")");
            //console.log("\""+name + "\": " + price.text());
            queue.push({name:name,cell:price});
            if(price.text().slice(-1)!="🗘".slice(-1)){
                //console.log("\""+price.text().slice(-1)+"\"")
                price.append("🗘");
            }
        })
    })

    while(queue.length > 0){
        const cur = queue[0];
        getPrice(cur.name,function(price){
            cur.cell.html("€"+price);
        });
    queue.shift();
    }
}



// Get price, maybe from cache, maybe from scryfall from scryfall
// 'onLoad(eurprice : number )' get called, asynchrounously
async function getPrice(cardnameFull,onLoad){
    const cached = await db.cards.get(cardnameFull);
    //console.log("cached:" + JSON.stringify(cached));
    if (cached && cached.timestamp <= Date.now() + 1000/*ms*/ *60 /*s*/ *60 /*min*/ * 24 /*h*/){
        onLoad(cached.eur)
        return;
    }
    const cardname = encodeURIComponent("!\""+cardnameFull+"\"");
    //const url = "https://api.scryfall.com/cards/search?q=prefer%3Aeurlow+"+cardname;
    const url = "https://api.scryfall.com/cards/search?q="+cardname+"%28eur>%3D0+or+eur_foil>%3D0%29&unique=prints&order=eur&dir=asc";
    console.log(url+"&pretty=true");
  GM_xmlhttpRequest({
      method: "GET",
      url: url,
      responseType: "json",
      onload: function(responseRaw){
          if(responseRaw.status != 200){
              console.error("Bad 'getPrice' status for \""+cardname+"\": "+responseRaw.status);
              console.error(url);
              return;
          }
          const res = responseRaw.response;
          if(res.object != "list"){
             console.error("Internal error 'getPrice'");
             console.error(url);
             return;
          }
          //if()
          /*
          if(res.total_cards != 1){
              console.error("Ambigous name \""+cardname+"\": got "+res.total_cards+" results");
              return;
          }
          const prices = res.data[0].prices;
          const price = prices.eur?prices.eur:prices.eurFoil;
          */
          var price = undefined;
          for(let i = 0; i < res.data.length;i++){
              const prices = res.data[i].prices;
              price = prices.eur?prices.eur:prices.eur_foil;
              if(price){
                  break;
              }
          }
          console.log(url+"&pretty=true "+price);
          price = price.replace(/[^0-9\.]/g,'');
          db.cards.put({name:cardnameFull, eur:price, timestamp:Date.now()});
          onLoad(price);
      }
  });
}
