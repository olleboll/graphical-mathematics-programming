var simplecube = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="fApNn|7Yh4pr`ndbz+b[" x="50" y="90"><field name="VAR">kub</field><value name="VALUE"><block type="graphics_make_cube" id="v1`%KK%a*7=yGS^-W%DP"><value name="Length"><block type="math_number" id="=#BH=]ALtSK}t2@S/rx7"><field name="NUM">5</field></block></value></block></value></block></xml>';
var movingcube = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="oD2(hL(=C}I/;3:s~^Kz" x="50" y="110"><field name="VAR">kub</field><value name="VALUE"><block type="graphics_make_cube" id="7a/44l:+[9)WDi2zU4ql"><value name="Length"><block type="math_number" id="OyiOHGQ5QBty=Wxtr!Tl"><field name="NUM">5</field></block></value></block></value><next><block type="controls_repeat_ext" id="P;x|ef6{b}V;SL81#2uJ"><value name="TIMES"><block type="math_number" id="{C%+Z5vl%`p)P)+0Zhn)"><field name="NUM">10</field></block></value><statement name="DO"><block type="graphics_move_object" id="H31}M}xO,L/K]X|JQAHh"><field name="direction">up</field><value name="Object"><block type="variables_get" id="~ywEFR8.I.|v@JD[#F/*"><field name="VAR">kub</field></block></value></block></statement></block></next></block></xml>';
var row_of_spheres = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="H_x%K,uT?=}s06RE{q8Y" x="70" y="50"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="Th^UKfR*W+kvC[)fD_|K"></block></value><next><block type="controls_repeat_ext" id="k%7h4TYy3p@_}aQ9#kKL"><value name="TIMES"><block type="math_number" id="]_r[MLdUh~0K!I@p=j,O"><field name="NUM">1</field></block></value><statement name="DO"><block type="graphics_move_object" id="[qGphu)!i8.5[ZfU%Qns"><field name="direction">left</field><value name="Object"><block type="variables_get" id="`Cj]W3|Bx]7@GoSXrx:P"><field name="VAR">pekare</field></block></value></block></statement><next><block type="controls_repeat_ext" id="2So^y%c4`f#4!@cCMMLk"><value name="TIMES"><block type="math_number" id=",nk,@Jm[Xizwc]75uYzh"><field name="NUM">10</field></block></value><statement name="DO"><block type="variables_set" id="|Q~|%1*QyXxSf}iz%/0Z"><field name="VAR">föremål</field><value name="VALUE"><block type="graphics_make_sphere" id="J)a.x?R?-0y3?ce(:b]E"><value name="Radie"><block type="math_number" id="@xbgq[rm040qH^SS1w!Y"><field name="NUM">5</field></block></value></block></value><next><block type="controls_repeat_ext" id="Zib:f{H#YU`28ok,V]i,"><value name="TIMES"><block type="math_number" id=";nrt=_1jYOzc]T):ZOk!"><field name="NUM">5</field></block></value><statement name="DO"><block type="graphics_move_object" id="jCPeB57a@TFI/_zfZ_ji"><field name="direction">right</field><value name="Object"><block type="variables_get" id="k;XYG/Eqw6uR[a.LvHf{"><field name="VAR">pekare</field></block></value></block></statement></block></next></block></statement></block></next></block></next></block></xml>';
var moving_spheres = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="bN50/=pYl8/+/gbSy1N1" x="50" y="-70"><field name="VAR">lista</field><value name="VALUE"><block type="lists_create_empty" id="*an02OoV5%@j02D#Q7F%"></block></value><next><block type="variables_set" id="H_x%K,uT?=}s06RE{q8Y"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="Th^UKfR*W+kvC[)fD_|K"></block></value><next><block type="variables_set" id=",EFSU5LHLdW2**0my//R"><field name="VAR">i</field><value name="VALUE"><block type="math_number" id="rTS3^Ip85^hA502Ot~yw"><field name="NUM">1</field></block></value><next><block type="controls_repeat_ext" id="k%7h4TYy3p@_}aQ9#kKL"><value name="TIMES"><block type="math_number" id="]_r[MLdUh~0K!I@p=j,O"><field name="NUM">50</field></block></value><statement name="DO"><block type="graphics_move_object" id="[qGphu)!i8.5[ZfU%Qns"><field name="direction">left</field><value name="Object"><block type="variables_get" id="`Cj]W3|Bx]7@GoSXrx:P"><field name="VAR">pekare</field></block></value></block></statement><next><block type="controls_repeat_ext" id="2So^y%c4`f#4!@cCMMLk"><value name="TIMES"><block type="math_number" id=",nk,@Jm[Xizwc]75uYzh"><field name="NUM">20</field></block></value><statement name="DO"><block type="lists_setIndex" id="E7E4XVc`C6+h?;Eutr7D"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get" id="!.1;3-P{P)_5pl,.(gj%"><field name="VAR">lista</field></block></value><value name="AT"><block type="variables_get" id="CA1nO7kt2A7Ez~;T~d*-"><field name="VAR">i</field></block></value><value name="TO"><block type="graphics_make_sphere" id="J-^uL4CZWTGl]wl#*`*4"><value name="Radie"><block type="math_number" id="4B/O0EGPS1Z|+r:w2;u!"><field name="NUM">5</field></block></value></block></value><next><block type="variables_set" id=":qsm+*6Z}CV%`aqL]SwX"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="^Z*R]?okPT#?g3wK:i^A"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="Hen50m#v9Fjw;EFzn73;"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id="Dq]d=EEW-98fy)~rt6@N"><field name="NUM">1</field></block></value></block></value><next><block type="controls_repeat_ext" id="QVh!tET=gi{n(/e2B/I#"><value name="TIMES"><block type="math_number" id="1{QuX5F}Qppm*irvQMFs"><field name="NUM">5</field></block></value><statement name="DO"><block type="graphics_move_object" id="a7h+#*mQ6AW.7y,k.vo#"><field name="direction">right</field><value name="Object"><block type="variables_get" id="(Mo}+x=f25hxB7fs_bC4"><field name="VAR">pekare</field></block></value></block></statement></block></next></block></next></block></statement><next><block type="variables_set" id="H0;s_ga3dGXKNi1)~SOV"><field name="VAR">i</field><value name="VALUE"><block type="math_number" id="M4,0F-}U;c`x!WV_)#65"><field name="NUM">1</field></block></value><next><block type="controls_repeat_ext" id="hGqYe+-^ZwWOe)zHz@_P"><value name="TIMES"><block type="math_number" id="!PF+AEa9W65oKX+Nrop|"><field name="NUM">20</field></block></value><statement name="DO"><block type="variables_set" id="*a^@gsdrP`,y9Ix^J1K["><field name="VAR">temp</field><value name="VALUE"><block type="lists_getIndex" id="Iv=XH51zI5H+~GkAw@iy"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="O%,HglT+|_!2B=L}oUNG"><field name="VAR">lista</field></block></value><value name="AT"><block type="variables_get" id="E1x3noV.YK@ArgPl*!pU"><field name="VAR">i</field></block></value></block></value><next><block type="variables_set" id="4Lio/W4S.oZ0i]VQcL/p"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="z;r:sHSSeZZw~hZM6~lg"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="t=Z//1KcU.OO=H496)`B"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id=";Im*^|D:A/AHNeTS%^4:"><field name="NUM">1</field></block></value></block></value><next><block type="graphics_infinite_flag" id="1CPX5hOXQP{0Hieh/vDb"><statement name="DO"><block type="controls_repeat_ext" id="zFr7:%l`zP?PX%=cwsy#"><value name="TIMES"><block type="variables_get" id=";]6`sp=|}UGt%^T~TK@5"><field name="VAR">i</field></block></value><statement name="DO"><block type="graphics_move_object" id="Y%zqfGWb/jl.yS~~,M,U"><field name="direction">up</field><value name="Object"><block type="variables_get" id=";g%BuSUfH5:ee_Cw:i9o"><field name="VAR">temp</field></block></value><next><block type="graphics_color" id="lh~Hh*)jQcv+oN4Q6f/{"><value name="object"><block type="variables_get" id="2|lAtpPgKR2Z3BS3tDEJ"><field name="VAR">temp</field></block></value><value name="color"><block type="colour_picker" id="e#!G^.lUR==?vh0QxchR"><field name="COLOUR">#ff0000</field></block></value></block></next></block></statement><next><block type="controls_repeat_ext" id="p(4ml5ACtnorEVg#-.kS"><value name="TIMES"><block type="variables_get" id="3.@[`hOH4#C{evK~:qY`"><field name="VAR">i</field></block></value><statement name="DO"><block type="graphics_move_object" id="5Q=l}bi7VPH3WhI:*H=l"><field name="direction">down</field><value name="Object"><block type="variables_get" id="Ee3RDN:LXi5a;@V%D#Uk"><field name="VAR">temp</field></block></value><next><block type="graphics_color" id="7%h/([*v,9{l]9W2L/i4"><value name="object"><block type="variables_get" id="-Odgh0[2%*Az];BTLaG5"><field name="VAR">temp</field></block></value><value name="color"><block type="colour_picker" id="vJ=2?5tRK/0wiG@/npyr"><field name="COLOUR">#33ccff</field></block></value></block></next></block></statement></block></next></block></statement></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
var rotating_cubes = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="H_x%K,uT?=}s06RE{q8Y" x="70" y="50"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="Th^UKfR*W+kvC[)fD_|K"></block></value><next><block type="controls_repeat_ext" id="k%7h4TYy3p@_}aQ9#kKL"><value name="TIMES"><block type="math_number" id="]_r[MLdUh~0K!I@p=j,O"><field name="NUM">40</field></block></value><statement name="DO"><block type="graphics_move_object" id="[qGphu)!i8.5[ZfU%Qns"><field name="direction">left</field><value name="Object"><block type="variables_get" id="`Cj]W3|Bx]7@GoSXrx:P"><field name="VAR">pekare</field></block></value></block></statement><next><block type="controls_repeat_ext" id="2So^y%c4`f#4!@cCMMLk"><value name="TIMES"><block type="math_number" id=",nk,@Jm[Xizwc]75uYzh"><field name="NUM">8</field></block></value><statement name="DO"><block type="variables_set" id="|Q~|%1*QyXxSf}iz%/0Z"><field name="VAR">föremål</field><value name="VALUE"><block type="graphics_make_cube" id="+,VIv(e6cGLlV(yQEsz_"><value name="Length"><block type="math_number" id="([y)-q;h5tkm@c^Zf[vl"><field name="NUM">5</field></block></value></block></value><next><block type="controls_repeat_ext" id="Zib:f{H#YU`28ok,V]i,"><value name="TIMES"><block type="math_number" id=";nrt=_1jYOzc]T):ZOk!"><field name="NUM">10</field></block></value><statement name="DO"><block type="graphics_move_object" id="jCPeB57a@TFI/_zfZ_ji"><field name="direction">right</field><value name="Object"><block type="variables_get" id="k;XYG/Eqw6uR[a.LvHf{"><field name="VAR">pekare</field></block></value></block></statement><next><block type="graphics_infinite_flag" id="Nbt:GrgDzN6T34h^rQsR"><statement name="DO"><block type="graphics_rotate_object" id="0QZoV+Q#OuqT8a3x|KY5"><field name="direction">left</field><value name="Object"><block type="variables_get" id="6.TAl8H_4,=+CWGvndDs"><field name="VAR">föremål</field></block></value><next><block type="graphics_rotate_object" id="|C:o1ze.4(JV-]q27=L0"><field name="direction">up</field><value name="Object"><block type="variables_get" id="`-UYxh[a%Y/0WFE9e@5,"><field name="VAR">föremål</field></block></value></block></next></block></statement></block></next></block></next></block></statement></block></next></block></next></block></xml>';
var tunnel = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_repeat_ext" id="gOwNMAvqdo{y]p,,S;Ry" x="-50" y="-10"><value name="TIMES"><block type="math_number" id="VR@z.mC3}x:ATG{4XDQ,"><field name="NUM">50</field></block></value><statement name="DO"><block type="graphics_line" id="AQ-gI/9wI5fp73+~m0=d"><field name="Y">noTilt</field><field name="X">1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="PPoS.mghv(pB.Ro4JM:w"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="1b0MUjwrds5tJc3B.o-V"><field name="Y">1</field><field name="X">noTilt</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="|hsM3dWzrk!CVOQv^MfU"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="3D5_Y]b0oEFqA%.W4(7r"><field name="Y">noTilt</field><field name="X">-1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="@^bWVPVw3}M-o+UTk}5b"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="bYV;t!t5izG?MOUcFb+F"><field name="Y">-1</field><field name="X">noTilt</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="W@YdRc:ay;9Su*Hea.(M"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="}{IH)-Y1LLJ/=ziMvrc2"><field name="Y">noTilt</field><field name="X">noTilt</field><field name="Z">-1</field><value name="dist"><block type="math_number" id="5jQ?6l(UHn4Axz~oGr@M"><field name="NUM">100</field></block></value></block></next></block></next></block></next></block></next></block></statement></block></xml>';
var sinus = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="graphics_line" id="!/pP^1SNX(*vEZq)~8:R" x="-10" y="110"><field name="Y">sin</field><field name="X">1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="([LuZ9ADp#Ie)VRAw[X-"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="I-Up+U@cVhF:X]vSQB9D"><field name="Y">-1</field><field name="X">sin</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="DRlGR2~KDW_G11kz^yzd"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="=}WE!%M/.*=[5i[[,-i9"><field name="Y">sin</field><field name="X">-1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="_{NUh0+o=e|^,@0lyJeo"><field name="NUM">100</field></block></value></block></next></block></next></block></xml>';
var sinustunnel = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_repeat_ext" id="u4fE.yP(+PKn=l2@J}=x" x="-10" y="-90"><value name="TIMES"><block type="math_number" id="jOaKJ|YE2?en~3/B|6G7"><field name="NUM">5</field></block></value><statement name="DO"><block type="graphics_line" id="!/pP^1SNX(*vEZq)~8:R"><field name="Y">sin</field><field name="X">1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="([LuZ9ADp#Ie)VRAw[X-"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="I-Up+U@cVhF:X]vSQB9D"><field name="Y">-1</field><field name="X">sin</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="DRlGR2~KDW_G11kz^yzd"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="=}WE!%M/.*=[5i[[,-i9"><field name="Y">sin</field><field name="X">-1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="_{NUh0+o=e|^,@0lyJeo"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="Pxxy3O.`6,)}hR9-Wk{["><field name="Y">1</field><field name="X">sin</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="d~9moqZjFqF!:!J}tY=l"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="rgvAAk*3dVS-`t[kKwZ!"><field name="Y">noTilt</field><field name="X">noTilt</field><field name="Z">1</field><value name="dist"><block type="math_number" id="`dGG!wfZeDz,FT3FEMaV"><field name="NUM">50</field></block></value></block></next></block></next></block></next></block></next></block></statement></block></xml>';
var test = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_callnoreturn" id="l*T+!oPGEEXt,m(5[6Et" x="170" y="30"><mutation name="Start"></mutation></block><block type="procedures_defnoreturn" id="w^wYG^e@,.gn@in8mOqh" collapsed="true" x="110" y="190"><field name="NAME">Start</field><comment pinned="false" h="80" w="160">Skapar startläge</comment><statement name="STACK"><block type="variables_set" id="9%gvk/uW@@f/lTD(9`lR"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="vE6yp#SH`}m^iD-ZE||D"></block></value><next><block type="variables_set" id="oD2(hL(=C}I/;3:s~^Kz"><field name="VAR">kub</field><value name="VALUE"><block type="graphics_make_cube" id="7a/44l:+[9)WDi2zU4ql"><value name="Length"><block type="math_number" id="OyiOHGQ5QBty=Wxtr!Tl"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="^RcH2HkK5QFx]Z+4PTv]"><value name="object"><block type="variables_get" id="41I6q^,ul2h!t{1b2B:i"><field name="VAR">kub</field></block></value><value name="color"><block type="colour_picker" id="*RP98DI9g^),UYIW:}i["><field name="COLOUR">#33cc00</field></block></value><next><block type="controls_repeat_ext" id="P;x|ef6{b}V;SL81#2uJ"><value name="TIMES"><block type="math_number" id="{C%+Z5vl%`p)P)+0Zhn)"><field name="NUM">10</field></block></value><statement name="DO"><block type="graphics_move_object" id="H31}M}xO,L/K]X|JQAHh"><field name="direction">up</field><value name="Object"><block type="variables_get" id="~ywEFR8.I.|v@JD[#F/*"><field name="VAR">pekare</field></block></value><next><block type="graphics_move_object" id="w-6U?XM}v@JUx%Nsn!!!"><field name="direction">right</field><value name="Object"><block type="variables_get" id="3T)1K8-VkqQt}QBfsG0?"><field name="VAR">pekare</field></block></value></block></next></block></statement><next><block type="variables_set" id="r+((A9yU}N]91E!vD/ZW"><field name="VAR">kub2</field><value name="VALUE"><block type="graphics_make_cube" id="*7++KKo^aqa[J}(1.Y6V"><value name="Length"><block type="math_number" id="*+Yc@nRXR_r#gmEOhGU^"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="E=}Iew*._vSiaO`uuUx_"><value name="object"><block type="variables_get" id="]@Rah.P6/#GCk0L7Z88c"><field name="VAR">kub2</field></block></value><value name="color"><block type="colour_picker" id="O!6Nn1%mP+}19~to(:TO"><field name="COLOUR">#66ffff</field></block></value><next><block type="controls_repeat_ext" id="}tgZf=@np!ZM/1Mz+xP+"><value name="TIMES"><block type="math_number" id="xeGJG`/AEJk|0#CW4(pQ"><field name="NUM">5</field></block></value><statement name="DO"><block type="graphics_move_object" id="Q2mi%{)[^,:X(=/W^kOx"><field name="direction">down</field><value name="Object"><block type="variables_get" id="}dA*={YiDB6E#,Maa5//"><field name="VAR">pekare</field></block></value></block></statement><next><block type="variables_set" id="3eNpv}[r/q.?7kl%xzNg"><field name="VAR">kub3</field><value name="VALUE"><block type="graphics_make_cube" id=",XSDe-{ki;]Xw0H{O@}["><value name="Length"><block type="math_number" id="lQ9Llo1OF63`{ppJRm7+"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="NRqSr2rYvQ;xi%r!uPsR"><value name="object"><block type="variables_get" id="`A@0oqKJ;?}h,h5/TW-p"><field name="VAR">kub3</field></block></value><value name="color"><block type="colour_picker" id="e^`=cuQZ,U^M}3A}s)@t"><field name="COLOUR">#3333ff</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>';
var test2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="graphics_line" id="AQ-gI/9wI5fp73+~m0=d" x="-10" y="30"><field name="Y">noTilt</field><field name="X">1</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="PPoS.mghv(pB.Ro4JM:w"><field name="NUM">100</field></block></value><next><block type="graphics_line" id="Naq)@/;OKn-)PGc`B|P@"><field name="Y">1</field><field name="X">noTilt</field><field name="Z">noTilt</field><value name="dist"><block type="math_number" id="}vGTU{E0!I1%cTD.0w3("><field name="NUM">100</field></block></value></block></next></block></xml>';
function loadEx1(){
  resetall();
  var xml = Blockly.Xml.textToDom(simplecube);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx2(){
  resetall();
  var xml = Blockly.Xml.textToDom(movingcube);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx3(){
  resetall();
  var xml = Blockly.Xml.textToDom(row_of_spheres);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx4(){
  resetall();
  var xml = Blockly.Xml.textToDom(rotating_cubes);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx5(){
  resetall();
  var xml = Blockly.Xml.textToDom(moving_spheres);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx6(){
  resetall();
  var xml = Blockly.Xml.textToDom(simplecube);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx7(){
  resetall();
  var xml = Blockly.Xml.textToDom(movingcube);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx8(){
  resetall();
  var xml = Blockly.Xml.textToDom(row_of_spheres);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx9(){
  resetall();
  var xml = Blockly.Xml.textToDom(rotating_cubes);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx10(){
  resetall();
  var xml = Blockly.Xml.textToDom(moving_spheres);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx11(){
  resetall();
  var xml = Blockly.Xml.textToDom(tunnel);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx12(){
  resetall();
  var xml = Blockly.Xml.textToDom(sinus);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadEx13(){
  resetall();
  var xml = Blockly.Xml.textToDom(sinustunnel);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadExFromDB1(){
  resetall();
  var xml = Blockly.Xml.textToDom(DB1);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadExFromDB2(){
  resetall();
  var xml = Blockly.Xml.textToDom(DB2);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadExFromDB3(){
  resetall();
  var xml = Blockly.Xml.textToDom(DB3);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadExFromDB4(){
  resetall();
  var xml = Blockly.Xml.textToDom(DB4);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadExFromDB5(){
  resetall();
  var xml = Blockly.Xml.textToDom(DB5);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

function loadtest(){
  resetall();
  var xml = Blockly.Xml.textToDom(test);
  Blockly.Xml.domToWorkspace(xml, workspace);
}
function loadtest2(){
  resetall();
  var xml = Blockly.Xml.textToDom(test2);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

var temp;
function saveCode(){
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  console.log(xml_text);
  temp = xml_text;
}

function loadTemp(){
  resetall();
  var xml = Blockly.Xml.textToDom(temp);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

var DB1;
var DB2;
var DB3;
var DB4;
var DB5;
var examples = [];
function setupExamples(data){
	var ids = JSON.parse(data);
	var number = ids.length;
	for(var i = 0; i < number; i++){
		getExample(ids[i], defineExamples);
	}
}

function setUpAllOpenExamples(data){
	var ids = JSON.parse(data);
	var number = ids.length;
	for(var i = 0; i < number; i++){
		getExample(ids[i], defineOpenExamples);
	}
}

var AllExamples = [];
function defineOpenExamples(data){

	var example = JSON.parse(data);
	AllExamples.push(example[1]);
	var btn = document.createElement("BUTTON");
	//btn.setAttribute("id", example[2]);
	var t = document.createTextNode(example[0] + " by " + example[3]);
	btn.onclick = function() { 
	    resetall();
		var xml = Blockly.Xml.textToDom(example[1]);
		Blockly.Xml.domToWorkspace(xml, workspace);
		currentExampleId = null;
  	};
	btn.appendChild(t);
	document.getElementById("allexamples").appendChild(btn);
	document.getElementById("allexamples").insertAdjacentHTML('beforeend', '<br>');
	//console.log("Button made");
	//console.log("Succefully retrived default examples");
}
var examples = [];
function defineExamples(data){

	var example = JSON.parse(data);
	examples.push(example[1]);
	DB1 = examples[0];
	DB2 = examples[1];
	DB3 = examples[2];
	DB4 = examples[3];
	DB5 = examples[4];
	//console.log("Succefully retrived default examples");
}

function getUserExamplesIDs(data){
	var userid = JSON.parse(id);
	var number = ids.length;
}
var exampleIDs;
function setupUserExamples(data){
	exampleIDs = JSON.parse(data);
	if(exampleIDs.length == 0){
		var t = document.createTextNode("Du har inte sparat några exempel. Gör något kul, spara det och dela med dig!");
		document.getElementById("myexamples").appendChild(t);
	}else{
		
		progress = 0;
		for(var i = 0; i < exampleIDs.length; i++){
			getExample(exampleIDs[i], defineUserExamples);
		}
	}
}

var SearchExamples = [];
function setupSearchExamples(data){
	exampleIDs = JSON.parse(data);
	for(var i = 0; i < exampleIDs.length; i++){
		getExample(exampleIDs[i], defineSearchedExamples);
	}
}

function defineSearchedExamples(data){
	var example = JSON.parse(data);
	SearchExamples.push(example[1]);
	
	removeOld(example[2]);

	var btn = document.createElement("BUTTON");
	btn.setAttribute("id", example[2]);
	var t = document.createTextNode(example[0]);
	btn.onclick = function() { 
	    resetall();
		var xml = Blockly.Xml.textToDom(example[1]);
		Blockly.Xml.domToWorkspace(xml, workspace);
		currentExampleId = example[2];
  	};

	btn.appendChild(t);
	document.getElementById("searchexamples").appendChild(btn);
	document.getElementById("searchexamples").insertAdjacentHTML('beforeend', '<br>');
}

var progress;
function defineUserExamples(data){
	progress++;
	var example = JSON.parse(data);
	UserExamples.push(example[1]);
	
	removeOld(example[2]);

	var btn = document.createElement("BUTTON");
	btn.setAttribute("id", example[2]);
	var t = document.createTextNode(example[0]);
	btn.onclick = function() { 
	    resetall();
		var xml = Blockly.Xml.textToDom(example[1]);
		Blockly.Xml.domToWorkspace(xml, workspace);
		currentExampleId = example[2];
  	};

	btn.appendChild(t);
	document.getElementById("myexamples").appendChild(btn);
	document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br>');
	//console.log("Button made");

}
var currentExampleId;
function edit_Example(){
	var xml = Blockly.Xml.workspaceToDom(workspace);
  	var xml_text = Blockly.Xml.domToText(xml);
  	//Säkerhetsrisk.. currenExampleID borde inte hanteras såhär då det går att ändra den i textfältet
  	if(currentExampleId == null){
  		alert("Du får inte spara över detta exempel");
  	}else{
  		editExample(currentExampleId, xml_text);
  	}
	

}
function removeOld(name){
	if(document.getElementById(name) != null){
		document.getElementById(name).remove();
	}
}


