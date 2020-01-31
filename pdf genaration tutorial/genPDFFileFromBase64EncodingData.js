const fs = require('fs');

var base64Data = [37,80,68,70,45,49,46,51,10,37,255,255,255,255,10,55,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,69,120,116,71,83,116,97,116,101,10,47,99,97,32,49,10,62,62,10,101,110,100,111,98,106,10,56,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,69,120,116,71,83,116,97,116,101,10,47,99,97,32,49,10,47,67,65,32,49,10,62,62,10,101,110,100,111,98,106,10,49,48,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,69,120,116,71,83,116,97,116,101,10,47,67,65,32,49,10,62,62,10,101,110,100,111,98,106,10,54,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,80,97,103,101,10,47,80,97,114,101,110,116,32,49,32,48,32,82,10,47,77,101,100,105,97,66,111,120,32,91,48,32,48,32,53,57,53,46,50,56,32,56,52,49,46,56,57,93,10,47,67,111,110,116,101,110,116,115,32,52,32,48,32,82,10,47,82,101,115,111,117,114,99,101,115,32,53,32,48,32,82,10,62,62,10,101,110,100,111,98,106,10,53,32,48,32,111,98,106,10,60,60,10,47,80,114,111,99,83,101,116,32,91,47,80,68,70,32,47,84,101,120,116,32,47,73,109,97,103,101,66,32,47,73,109,97,103,101,67,32,47,73,109,97,103,101,73,93,10,47,69,120,116,71,83,116,97,116,101,32,60,60,10,47,71,115,49,32,55,32,48,32,82,10,47,71,115,50,32,56,32,48,32,82,10,47,71,115,51,32,49,48,32,48,32,82,10,62,62,10,47,70,111,110,116,32,60,60,10,47,70,49,32,57,32,48,32,82,10,62,62,10,62,62,10,101,110,100,111,98,106,10,52,32,48,32,111,98,106,10,60,60,10,47,76,101,110,103,116,104,32,52,49,56,10,47,70,105,108,116,101,114,32,47,70,108,97,116,101,68,101,99,111,100,101,10,62,62,10,115,116,114,101,97,109,10,120,156,197,84,219,74,3,65,12,125,159,175,200,15,56,77,230,150,25,40,125,104,213,66,31,4,237,190,21,31,116,109,69,177,130,22,244,247,205,236,206,246,34,69,11,173,200,146,157,236,153,33,123,78,38,9,1,202,115,70,242,138,142,116,76,80,47,21,193,167,154,221,10,244,160,16,158,197,38,202,152,168,109,116,28,2,36,171,131,241,16,4,8,198,162,7,75,218,97,134,222,231,170,119,62,255,120,170,231,55,227,33,212,43,133,58,26,118,30,83,68,155,12,249,16,225,48,104,85,191,170,222,120,69,240,184,82,139,125,124,98,166,19,3,155,142,14,217,164,83,10,152,220,191,240,113,168,125,71,197,177,142,45,183,63,103,34,158,201,222,183,224,205,165,230,147,11,245,166,104,223,21,15,171,130,19,24,1,147,67,142,4,204,73,20,56,203,30,170,165,234,93,230,77,168,22,106,214,71,68,18,51,98,182,172,78,204,151,53,100,108,0,120,11,213,68,93,84,234,122,127,142,186,12,45,149,73,65,27,199,200,29,244,178,173,97,52,45,26,166,163,171,172,209,102,141,211,147,168,245,8,108,88,51,7,166,212,169,164,141,74,222,86,184,163,232,20,127,79,235,210,248,145,68,28,228,210,97,27,141,92,74,6,210,64,182,117,112,209,217,216,0,182,36,253,174,248,247,133,114,45,246,80,246,230,39,167,79,236,229,178,144,136,127,79,162,219,42,151,204,106,145,217,158,156,145,177,57,163,205,92,250,137,17,225,64,142,234,166,178,251,165,110,37,77,68,135,215,110,219,223,212,84,111,243,37,174,246,150,14,172,221,223,102,88,27,120,3,29,29,125,119,98,183,225,183,176,227,227,75,7,115,215,193,180,110,234,22,58,58,186,204,138,28,3,45,125,27,23,27,244,144,200,95,113,81,124,160,10,101,110,100,115,116,114,101,97,109,10,101,110,100,111,98,106,10,49,50,32,48,32,111,98,106,10,40,112,100,102,109,97,107,101,41,10,101,110,100,111,98,106,10,49,51,32,48,32,111,98,106,10,40,112,100,102,109,97,107,101,41,10,101,110,100,111,98,106,10,49,52,32,48,32,111,98,106,10,40,68,58,50,48,49,57,48,51,49,54,49,53,53,55,53,54,90,41,10,101,110,100,111,98,106,10,49,49,32,48,32,111,98,106,10,60,60,10,47,80,114,111,100,117,99,101,114,32,49,50,32,48,32,82,10,47,67,114,101,97,116,111,114,32,49,51,32,48,32,82,10,47,67,114,101,97,116,105,111,110,68,97,116,101,32,49,52,32,48,32,82,10,62,62,10,101,110,100,111,98,106,10,49,54,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,70,111,110,116,68,101,115,99,114,105,112,116,111,114,10,47,70,111,110,116,78,97,109,101,32,47,65,90,90,90,90,90,43,82,111,98,111,116,111,45,77,101,100,105,117,109,10,47,70,108,97,103,115,32,52,10,47,70,111,110,116,66,66,111,120,32,91,45,55,51,50,46,52,50,49,56,55,53,32,45,50,55,48,46,57,57,54,48,57,52,32,49,49,54,57,46,57,50,49,56,55,53,32,49,48,53,54,46,49,53,50,51,52,52,93,10,47,73,116,97,108,105,99,65,110,103,108,101,32,48,10,47,65,115,99,101,110,116,32,57,50,55,46,55,51,52,51,55,53,10,47,68,101,115,99,101,110,116,32,45,50,52,52,46,49,52,48,54,50,53,10,47,67,97,112,72,101,105,103,104,116,32,55,49,48,46,57,51,55,53,10,47,88,72,101,105,103,104,116,32,53,50,56,46,51,50,48,51,49,51,10,47,83,116,101,109,86,32,48,10,47,70,111,110,116,70,105,108,101,50,32,49,53,32,48,32,82,10,62,62,10,101,110,100,111,98,106,10,49,55,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,70,111,110,116,10,47,83,117,98,116,121,112,101,32,47,67,73,68,70,111,110,116,84,121,112,101,50,10,47,66,97,115,101,70,111,110,116,32,47,65,90,90,90,90,90,43,82,111,98,111,116,111,45,77,101,100,105,117,109,10,47,67,73,68,83,121,115,116,101,109,73,110,102,111,32,60,60,10,47,82,101,103,105,115,116,114,121,32,40,65,100,111,98,101,41,10,47,79,114,100,101,114,105,110,103,32,40,73,100,101,110,116,105,116,121,41,10,47,83,117,112,112,108,101,109,101,110,116,32,48,10,62,62,10,47,70,111,110,116,68,101,115,99,114,105,112,116,111,114,32,49,54,32,48,32,82,10,47,87,32,91,48,32,91,57,48,56,32,54,48,51,46,53,49,53,54,50,53,32,51,51,50,46,53,49,57,53,51,49,32,53,52,49,46,48,49,53,54,50,53,32,53,51,54,46,54,50,49,48,57,52,32,56,55,48,46,49,49,55,49,56,56,32,53,53,54,46,49,53,50,51,52,52,32,54,53,51,46,51,50,48,51,49,51,32,54,48,54,46,57,51,51,53,57,52,32,51,53,49,46,53,54,50,53,32,53,49,54,46,49,49,51,50,56,49,32,53,50,51,46,52,51,55,53,32,50,53,53,46,51,55,49,48,57,52,32,53,54,57,46,51,51,53,57,51,56,32,50,52,57,46,48,50,51,52,51,56,32,50,53,53,46,51,55,49,48,57,52,32,54,54,53,46,53,50,55,51,52,52,32,53,53,53,46,54,54,52,48,54,51,93,93,10,62,62,10,101,110,100,111,98,106,10,49,56,32,48,32,111,98,106,10,60,60,10,47,76,101,110,103,116,104,32,50,55,48,10,47,70,105,108,116,101,114,32,47,70,108,97,116,101,68,101,99,111,100,101,10,62,62,10,115,116,114,101,97,109,10,120,156,93,145,77,107,196,32,16,134,239,249,21,115,220,30,150,108,210,77,66,33,8,203,246,146,67,63,104,218,83,233,33,209,49,8,141,138,49,135,252,251,170,179,221,45,21,244,97,156,121,199,225,53,63,119,143,157,86,30,242,87,103,120,143,30,164,210,194,225,98,86,199,17,70,156,148,206,138,18,132,226,254,18,165,147,207,131,205,242,32,238,183,197,227,220,105,105,160,109,51,128,252,45,164,23,239,54,216,157,132,25,241,46,222,189,56,129,78,233,9,118,31,231,62,221,244,171,181,223,56,163,246,112,200,24,3,129,50,180,123,26,236,243,48,35,228,73,186,239,68,200,43,191,237,131,234,86,241,190,89,132,50,197,5,141,196,141,192,197,14,28,221,160,39,204,218,67,88,172,149,97,177,12,181,248,151,190,136,70,249,183,26,2,138,130,193,231,45,172,238,19,154,99,66,93,16,42,130,32,96,194,145,74,42,66,83,18,72,94,95,240,64,144,9,37,189,80,115,146,83,235,166,98,95,113,220,223,193,226,228,209,229,171,43,124,117,46,24,146,190,34,57,17,61,80,26,175,191,101,141,141,170,180,127,0,109,121,139,136,10,101,110,100,115,116,114,101,97,109,10,101,110,100,111,98,106,10,57,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,70,111,110,116,10,47,83,117,98,116,121,112,101,32,47,84,121,112,101,48,10,47,66,97,115,101,70,111,110,116,32,47,65,90,90,90,90,90,43,82,111,98,111,116,111,45,77,101,100,105,117,109,10,47,69,110,99,111,100,105,110,103,32,47,73,100,101,110,116,105,116,121,45,72,10,47,68,101,115,99,101,110,100,97,110,116,70,111,110,116,115,32,91,49,55,32,48,32,82,93,10,47,84,111,85,110,105,99,111,100,101,32,49,56,32,48,32,82,10,62,62,10,101,110,100,111,98,106,10,51,32,48,32,111,98,106,10,60,60,10,62,62,10,101,110,100,111,98,106,10,50,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,67,97,116,97,108,111,103,10,47,80,97,103,101,115,32,49,32,48,32,82,10,62,62,10,101,110,100,111,98,106,10,49,32,48,32,111,98,106,10,60,60,10,47,84,121,112,101,32,47,80,97,103,101,115,10,47,67,111,117,110,116,32,49,10,47,75,105,100,115,32,91,54,32,48,32,82,93,10,62,62,10,101,110,100,111,98,106,10,49,53,32,48,32,111,98,106,10,60,60,10,47,76,101,110,103,116,104,32,50,55,48,54,10,47,70,105,108,116,101,114,32,47,70,108,97,116,101,68,101,99,111,100,101,10,62,62,10,115,116,114,101,97,109,10,120,156,109,87,15,112,84,197,25,255,118,223,187,127,185,187,228,189,203,93,14,114,23,114,47,23,46,64,238,12,144,63,64,68,8,109,18,2,84,136,30,131,119,72,66,144,4,2,232,128,17,72,162,68,226,32,26,210,32,85,105,171,35,85,167,34,88,45,178,247,140,2,142,72,172,17,91,203,0,163,165,173,163,237,140,10,22,167,40,214,84,84,224,94,250,237,187,59,184,164,38,243,190,221,111,223,219,221,223,239,251,183,123,27,219,54,181,128,5,186,65,0,169,181,101,69,51,36,254,246,224,83,209,138,3,73,253,125,124,10,239,92,191,50,165,95,194,39,112,215,138,142,13,9,149,120,81,248,86,110,222,232,75,234,51,81,44,219,208,214,146,122,255,4,62,225,213,119,118,174,74,232,244,223,0,25,239,183,222,181,177,35,161,219,143,162,168,91,181,97,245,93,9,61,211,128,223,191,1,132,127,234,119,244,127,80,88,177,60,107,230,183,48,214,172,191,29,252,90,190,129,183,103,200,173,23,46,23,198,207,88,150,153,239,65,213,2,52,177,25,128,233,78,205,134,3,235,46,23,106,115,44,203,244,117,210,255,28,248,52,193,41,226,33,123,168,76,187,232,113,65,18,110,20,58,133,243,226,77,98,187,120,28,255,63,49,20,24,214,232,243,28,176,11,114,96,33,24,146,171,100,34,36,160,147,193,136,250,36,56,1,143,194,211,248,92,128,54,80,161,11,150,192,114,252,182,137,136,240,34,12,226,215,78,173,9,156,244,41,144,134,103,128,93,251,53,56,4,5,172,98,37,56,197,157,32,25,24,56,141,99,192,101,28,0,137,222,14,14,147,8,6,227,63,19,251,48,91,49,131,98,80,73,38,45,38,106,22,65,121,40,171,114,242,120,143,4,230,98,56,68,166,223,80,152,43,99,247,16,93,88,53,213,239,226,61,161,238,198,27,20,39,239,137,215,198,12,147,39,228,231,100,242,158,113,229,45,179,67,30,222,51,85,149,37,231,154,111,159,95,57,113,44,239,89,182,53,47,172,244,243,94,70,251,29,63,171,80,120,207,250,104,251,178,196,152,109,115,211,130,138,60,222,179,7,11,189,78,27,239,101,254,116,90,113,190,131,131,81,165,76,19,130,245,213,116,173,25,83,173,118,59,201,61,42,227,162,222,73,54,114,117,163,58,219,139,234,114,46,182,114,81,226,197,177,69,92,172,231,98,23,23,7,185,24,230,34,223,75,54,241,25,155,248,140,77,124,198,38,53,203,135,211,214,251,184,202,123,23,185,200,247,225,199,203,185,216,197,197,41,46,134,185,152,205,191,43,41,224,51,184,40,153,132,98,54,10,116,33,134,183,48,1,205,46,160,251,44,96,131,44,88,175,218,36,89,118,204,96,54,137,193,105,46,141,186,180,232,210,126,26,24,212,68,24,45,241,196,168,111,86,84,87,0,21,144,102,69,85,145,2,206,84,13,137,198,148,104,204,122,195,50,62,86,109,137,1,123,98,128,74,44,243,227,201,83,20,69,86,4,153,16,153,8,10,41,39,138,48,33,62,147,14,86,104,95,105,175,19,219,89,42,104,26,161,241,184,129,93,222,107,48,197,187,104,251,21,153,118,196,27,105,99,15,109,196,192,152,63,124,65,236,53,12,66,17,172,82,229,9,19,113,221,4,62,11,66,178,164,240,229,161,146,199,241,209,60,11,7,144,105,201,227,0,44,82,76,38,44,163,56,162,252,221,243,223,40,226,137,185,175,171,106,129,254,45,203,147,98,227,175,143,78,158,66,202,2,133,69,129,242,178,194,210,169,57,57,46,127,89,192,95,96,116,57,115,68,84,156,162,191,160,48,80,94,234,204,41,157,90,33,236,124,88,123,182,245,93,146,127,238,137,175,122,174,238,218,190,101,199,110,178,248,100,147,246,197,197,167,181,239,30,143,239,125,242,193,237,164,189,169,117,237,156,174,63,177,179,27,78,221,223,246,192,218,229,245,235,90,30,216,191,225,181,191,109,58,185,99,75,207,58,100,103,30,190,64,219,12,115,192,9,139,85,112,229,92,99,151,141,132,178,189,73,118,118,84,236,200,142,101,75,140,156,230,62,131,18,70,164,152,152,198,205,46,197,204,105,170,40,49,233,52,114,145,75,93,126,153,195,157,230,50,250,125,178,236,47,47,149,201,129,99,199,166,204,158,84,28,190,89,59,175,170,134,57,218,15,253,241,189,179,166,101,188,225,38,229,180,165,159,152,48,219,151,14,95,16,174,136,11,97,28,76,132,30,213,61,169,152,91,202,45,49,95,50,58,220,8,201,157,194,39,162,34,74,163,67,133,186,69,238,10,171,222,48,107,9,78,143,101,165,153,223,97,205,194,23,85,22,155,195,235,8,58,102,58,196,6,68,29,203,79,35,97,149,98,126,83,154,103,148,64,145,209,95,160,187,166,180,60,225,23,127,89,69,5,250,201,45,59,221,174,241,83,43,166,149,39,156,37,8,146,109,227,11,207,157,36,228,226,47,27,155,194,107,135,54,255,185,235,205,79,133,137,241,120,221,86,223,182,135,123,26,242,107,59,95,223,113,224,200,220,197,45,225,170,232,83,145,99,7,180,49,143,221,38,31,172,189,241,68,227,146,218,48,175,119,97,140,59,43,90,192,5,121,240,144,154,51,46,159,179,200,145,152,57,105,1,51,242,52,123,71,147,206,5,51,255,46,183,164,255,88,238,169,92,218,208,191,60,119,125,46,189,187,63,63,183,132,55,23,115,135,177,81,251,114,73,67,204,118,157,26,3,41,38,165,155,198,172,231,143,89,138,229,164,71,166,161,0,202,203,117,194,14,217,165,228,112,175,186,141,70,161,192,104,82,202,3,1,26,253,151,246,73,215,167,63,255,199,127,226,55,89,127,211,190,127,205,182,57,31,238,109,190,79,38,167,204,109,78,226,255,102,220,111,135,31,209,62,215,180,59,30,218,243,112,215,138,117,194,51,125,93,142,123,187,48,6,183,0,24,59,145,105,30,116,168,162,206,51,193,80,64,82,66,138,161,9,21,211,8,186,41,197,131,138,39,229,125,23,42,174,148,98,67,197,198,173,66,4,143,94,53,76,46,78,203,52,130,44,27,195,227,212,141,164,220,9,79,250,101,221,181,166,108,191,140,173,9,117,178,194,212,118,252,195,250,205,127,125,229,32,29,90,218,26,94,227,34,67,134,55,31,187,105,72,172,188,123,251,190,125,199,223,138,207,160,3,171,155,162,117,241,92,250,199,99,237,87,191,198,211,6,121,117,98,229,251,30,121,73,152,91,86,217,241,227,188,70,80,201,68,37,83,74,103,172,163,207,20,56,108,65,138,89,71,212,9,196,235,203,78,194,213,97,54,154,58,222,38,183,26,135,162,45,143,215,33,182,174,71,181,174,120,57,61,186,122,229,246,171,26,66,162,176,27,64,124,31,107,177,21,163,170,78,165,72,54,81,37,93,201,152,34,184,37,25,93,115,121,166,219,200,136,88,177,167,227,40,149,149,169,162,195,229,114,82,209,47,200,165,60,9,16,209,110,242,242,91,164,120,239,243,218,169,119,246,61,255,238,25,122,114,208,192,126,175,13,158,152,119,74,59,254,162,120,246,202,231,63,124,113,203,151,151,209,74,33,196,196,16,147,9,74,18,32,140,184,175,49,5,66,63,5,56,8,163,20,131,244,250,194,157,166,32,105,165,92,17,153,86,121,69,155,37,110,195,101,189,226,217,19,144,136,41,218,143,182,183,195,92,213,146,153,117,205,246,35,178,198,138,138,53,165,24,80,49,240,157,48,235,105,90,46,88,172,6,156,141,187,37,173,92,170,135,10,125,101,114,233,254,202,161,243,198,200,158,178,2,97,153,185,59,238,21,43,59,119,102,242,189,23,96,237,122,15,247,14,192,58,213,82,52,97,228,137,145,218,206,139,138,87,47,83,94,75,210,11,57,167,249,129,145,158,135,246,28,9,223,245,219,236,94,59,109,96,94,41,86,152,246,82,41,164,252,165,160,100,43,180,65,63,54,2,252,216,224,65,60,234,212,224,69,11,79,13,158,176,21,244,163,117,223,135,95,187,240,218,31,46,14,181,46,169,111,105,36,227,158,91,244,205,224,246,211,27,47,24,58,86,54,53,147,192,156,234,178,9,145,253,125,111,12,60,89,219,48,127,214,244,89,179,111,187,247,182,199,94,109,122,97,197,146,134,121,156,221,34,100,247,45,178,243,194,205,42,228,141,187,198,46,11,9,101,165,216,233,102,70,118,233,62,83,5,51,247,131,154,157,165,151,168,172,81,197,133,87,207,210,76,234,47,0,185,188,12,120,38,250,3,122,30,34,11,58,227,246,14,241,156,184,249,189,77,159,105,151,136,249,236,91,67,198,115,98,251,178,205,221,100,235,203,107,23,182,28,92,69,2,68,24,251,29,153,248,201,161,134,142,151,94,46,98,7,120,5,237,66,184,191,48,156,193,155,135,29,102,171,70,61,10,48,142,240,8,75,187,97,164,16,235,161,207,221,143,142,176,225,69,164,36,102,180,167,151,126,116,60,41,171,152,202,173,89,16,32,91,135,134,52,109,238,131,117,117,15,206,21,43,201,216,233,243,231,79,159,54,111,30,238,137,214,193,11,237,66,188,229,228,66,141,106,243,120,147,247,156,49,201,61,245,163,202,59,170,62,197,28,35,78,206,216,152,116,187,100,235,5,23,220,110,167,17,253,8,229,110,103,206,212,138,196,233,179,232,254,179,187,63,34,178,149,220,119,238,87,231,180,47,135,122,47,237,216,217,217,222,71,139,158,25,222,161,125,254,197,140,103,175,246,146,41,154,101,255,209,129,35,123,7,142,162,239,250,208,34,91,141,88,150,176,214,94,55,65,193,168,132,79,178,69,142,70,254,99,128,95,221,13,63,209,51,52,3,230,166,209,248,191,28,189,150,189,60,174,45,34,213,175,64,37,35,98,32,67,31,229,185,139,119,177,82,162,96,43,188,29,63,177,89,251,129,6,62,163,69,218,247,241,61,100,223,7,36,172,29,192,251,88,61,205,167,203,120,204,181,99,204,125,135,21,140,87,210,140,180,74,58,226,80,208,111,41,222,31,195,164,135,38,199,4,212,158,200,181,88,198,136,208,211,79,117,185,84,118,226,137,134,141,95,176,173,123,135,189,58,244,82,108,214,208,185,181,247,159,124,155,30,141,215,158,220,42,88,174,28,7,161,15,154,197,191,192,124,250,59,48,139,139,97,169,184,0,194,198,75,176,69,188,7,58,13,149,176,91,252,8,66,244,52,234,10,44,16,39,195,34,106,133,46,241,17,88,68,52,52,165,21,250,12,97,112,136,109,208,206,32,184,128,89,234,35,49,66,30,137,30,38,195,219,89,117,94,204,34,44,111,12,49,18,244,249,106,214,84,51,210,20,98,52,200,200,36,37,196,132,160,175,150,9,227,107,111,141,248,163,190,94,95,239,188,230,94,95,173,175,117,69,51,19,199,235,45,190,104,233,141,150,248,24,132,35,107,80,46,142,40,172,42,234,185,214,109,137,70,43,67,76,228,203,136,250,50,189,81,92,96,109,114,129,181,250,2,56,63,30,98,134,224,2,31,19,2,245,145,91,34,172,187,218,195,170,170,163,30,69,241,213,176,129,250,8,27,168,246,40,209,104,136,25,175,97,244,37,126,132,232,104,77,65,102,156,20,98,230,196,10,225,8,171,242,48,136,246,246,38,52,191,194,186,123,123,61,189,200,32,165,15,140,212,15,19,24,61,80,149,62,128,22,168,57,76,186,235,245,55,221,126,197,195,7,252,138,95,65,132,209,234,16,179,4,23,132,35,53,8,81,65,136,25,65,22,172,9,49,107,144,133,176,177,5,99,69,164,199,215,27,142,28,169,2,17,86,30,54,67,207,226,200,17,8,10,231,55,68,61,204,143,139,251,122,14,99,128,165,198,56,75,123,144,85,245,28,246,193,210,72,44,4,213,158,35,16,18,206,87,71,67,255,3,229,242,116,138,10,101,110,100,115,116,114,101,97,109,10,101,110,100,111,98,106,10,120,114,101,102,10,48,32,49,57,10,48,48,48,48,48,48,48,48,48,48,32,54,53,53,51,53,32,102,32,10,48,48,48,48,48,48,50,50,54,55,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,50,50,49,56,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,50,49,57,55,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,52,48,52,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,50,54,52,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,49,53,52,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,48,49,53,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,48,53,57,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,50,48,53,48,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,49,48,57,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,57,56,50,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,56,57,52,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,57,50,48,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,48,57,52,54,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,50,51,50,52,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,49,48,53,56,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,49,51,50,53,32,48,48,48,48,48,32,110,32,10,48,48,48,48,48,48,49,55,48,55,32,48,48,48,48,48,32,110,32,10,116,114,97,105,108,101,114,10,60,60,10,47,83,105,122,101,32,49,57,10,47,82,111,111,116,32,50,32,48,32,82,10,47,73,110,102,111,32,49,49,32,48,32,82,10,47,73,68,32,91,60,49,55,55,98,100,53,50,57,97,99,99,54,55,53,98,55,50,48,49,54,55,101,98,57,102,56,51,48,100,99,102,50,62,32,60,49,55,55,98,100,53,50,57,97,99,99,54,55,53,98,55,50,48,49,54,55,101,98,57,102,56,51,48,100,99,102,50,62,93,10,62,62,10,115,116,97,114,116,120,114,101,102,10,53,49,48,52,10,37,37,69,79,70,10]

const buffer = Buffer.from(base64Data);

fs.writeFile("./test.pdf", buffer, 'base64', function(err) {
  console.log(err);
});