/* esm.sh - esbuild bundle(three@0.171.0) es2022 production */
import{Color as Ke,Matrix3 as Be,Vector2 as ft,mergeUniforms as lt,Vector3 as ke,CubeUVReflectionMapping as gn,Mesh as xt,BoxGeometry as fr,ShaderMaterial as It,cloneUniforms as si,BackSide as mt,ColorManagement as tt,SRGBTransfer as Ye,PlaneGeometry as dr,FrontSide as Jt,getUnlitUniformColorSpace as ur,Euler as pr,Matrix4 as kt,IntType as hr,RGBAFormat as Tt,HalfFloatType as vn,UnsignedByteType as yt,FloatType as Dt,Plane as Br,EquirectangularReflectionMapping as Nn,EquirectangularRefractionMapping as On,WebGLCubeRenderTarget as Gr,CubeReflectionMapping as jt,CubeRefractionMapping as Wt,PerspectiveCamera as fn,NoToneMapping as At,MeshBasicMaterial as Hr,BufferGeometry as mr,BufferAttribute as dn,WebGLRenderTarget as zt,NoBlending as wt,OrthographicCamera as Vr,LinearFilter as Gt,LinearSRGBColorSpace as En,warnOnce as Ft,arrayNeedsUint32 as kr,Uint32BufferAttribute as Wr,Uint16BufferAttribute as zr,Vector4 as ct,DataArrayTexture as _r,LessEqualCompare as gr,Texture as vr,DepthTexture as Er,Data3DTexture as Xr,CubeTexture as Yr,GLSL3 as li,CustomToneMapping as qr,NeutralToneMapping as Kr,AgXToneMapping as $r,ACESFilmicToneMapping as Zr,CineonToneMapping as Qr,ReinhardToneMapping as Jr,LinearToneMapping as jr,PCFShadowMap as Sr,PCFSoftShadowMap as ea,VSMShadowMap as St,LinearTransfer as Mr,AddOperation as ta,MixOperation as na,MultiplyOperation as ia,ObjectSpaceNormalMap as ra,TangentSpaceNormalMap as aa,NormalBlending as un,DoubleSide as Mt,UniformsUtils as oa,Layers as sa,Frustum as Tr,MeshDepthMaterial as la,RGBADepthPacking as ca,MeshDistanceMaterial as fa,NearestFilter as Zt,LessEqualDepth as pn,AddEquation as qt,SubtractEquation as da,ReverseSubtractEquation as ua,ZeroFactor as pa,OneFactor as ha,SrcColorFactor as ma,SrcAlphaFactor as _a,SrcAlphaSaturateFactor as ga,DstColorFactor as va,DstAlphaFactor as Ea,OneMinusSrcColorFactor as Sa,OneMinusSrcAlphaFactor as Ma,OneMinusDstColorFactor as Ta,OneMinusDstAlphaFactor as xa,ConstantColorFactor as Aa,OneMinusConstantColorFactor as Ra,ConstantAlphaFactor as Ca,OneMinusConstantAlphaFactor as ba,CustomBlending as Pa,MultiplyBlending as ci,SubtractiveBlending as fi,AdditiveBlending as di,CullFaceNone as La,CullFaceBack as ui,CullFaceFront as Ua,MinEquation as Da,MaxEquation as wa,NotEqualDepth as Fn,GreaterDepth as Bn,GreaterEqualDepth as Gn,EqualDepth as Hn,LessDepth as Vn,AlwaysDepth as kn,NeverDepth as Wn,RepeatWrapping as Ia,ClampToEdgeWrapping as ya,MirroredRepeatWrapping as Na,NearestMipmapNearestFilter as Oa,NearestMipmapLinearFilter as an,LinearMipmapNearestFilter as xn,LinearMipmapLinearFilter as Kt,NeverCompare as Fa,AlwaysCompare as Ba,LessCompare as Ga,EqualCompare as Ha,GreaterEqualCompare as Va,GreaterCompare as ka,NotEqualCompare as Wa,NoColorSpace as Bt,DepthStencilFormat as hn,getByteLength as pi,UnsignedIntType as en,UnsignedInt248Type as tn,UnsignedShortType as mn,DepthFormat as Jn,createElementNS as za,UnsignedShort4444Type as xr,UnsignedShort5551Type as Ar,UnsignedInt5999Type as Xa,ByteType as Ya,ShortType as qa,AlphaFormat as Ka,RGBFormat as $a,LuminanceFormat as Za,LuminanceAlphaFormat as Qa,RedFormat as Ja,RedIntegerFormat as Rr,RGFormat as ja,RGIntegerFormat as Cr,RGBAIntegerFormat as br,RGB_S3TC_DXT1_Format as An,RGBA_S3TC_DXT1_Format as Rn,RGBA_S3TC_DXT3_Format as Cn,RGBA_S3TC_DXT5_Format as bn,RGB_PVRTC_4BPPV1_Format as hi,RGB_PVRTC_2BPPV1_Format as mi,RGBA_PVRTC_4BPPV1_Format as _i,RGBA_PVRTC_2BPPV1_Format as gi,RGB_ETC1_Format as vi,RGB_ETC2_Format as Ei,RGBA_ETC2_EAC_Format as Si,RGBA_ASTC_4x4_Format as Mi,RGBA_ASTC_5x4_Format as Ti,RGBA_ASTC_5x5_Format as xi,RGBA_ASTC_6x5_Format as Ai,RGBA_ASTC_6x6_Format as Ri,RGBA_ASTC_8x5_Format as Ci,RGBA_ASTC_8x6_Format as bi,RGBA_ASTC_8x8_Format as Pi,RGBA_ASTC_10x5_Format as Li,RGBA_ASTC_10x6_Format as Ui,RGBA_ASTC_10x8_Format as Di,RGBA_ASTC_10x10_Format as wi,RGBA_ASTC_12x10_Format as Ii,RGBA_ASTC_12x12_Format as yi,RGBA_BPTC_Format as Pn,RGB_BPTC_SIGNED_Format as Ni,RGB_BPTC_UNSIGNED_Format as Oi,RED_RGTC1_Format as eo,SIGNED_RED_RGTC1_Format as Fi,RED_GREEN_RGTC2_Format as Bi,SIGNED_RED_GREEN_RGTC2_Format as Gi,Group as on,EventDispatcher as to,ArrayCamera as no,RAD2DEG as io,createCanvasElement as ro,SRGBColorSpace as ao,REVISION as oo,toNormalizedProjectionMatrix as so,toReversedProjectionMatrix as lo,probeAsync as co,WebGLCoordinateSystem as fo}from"./three.core.js";import{AdditiveAnimationBlendMode as zf,AlwaysStencilFunc as Xf,AmbientLight as Yf,AnimationAction as qf,AnimationClip as Kf,AnimationLoader as $f,AnimationMixer as Zf,AnimationObjectGroup as Qf,AnimationUtils as Jf,ArcCurve as jf,ArrowHelper as ed,AttachedBindMode as td,Audio as nd,AudioAnalyser as id,AudioContext as rd,AudioListener as ad,AudioLoader as od,AxesHelper as sd,BasicDepthPacking as ld,BasicShadowMap as cd,BatchedMesh as fd,Bone as dd,BooleanKeyframeTrack as ud,Box2 as pd,Box3 as hd,Box3Helper as md,BoxHelper as _d,BufferGeometryLoader as gd,Cache as vd,Camera as Ed,CameraHelper as Sd,CanvasTexture as Md,CapsuleGeometry as Td,CatmullRomCurve3 as xd,CircleGeometry as Ad,Clock as Rd,ColorKeyframeTrack as Cd,CompressedArrayTexture as bd,CompressedCubeTexture as Pd,CompressedTexture as Ld,CompressedTextureLoader as Ud,ConeGeometry as Dd,Controls as wd,CubeCamera as Id,CubeTextureLoader as yd,CubicBezierCurve as Nd,CubicBezierCurve3 as Od,CubicInterpolant as Fd,CullFaceFrontBack as Bd,Curve as Gd,CurvePath as Hd,CylinderGeometry as Vd,Cylindrical as kd,DataTexture as Wd,DataTextureLoader as zd,DataUtils as Xd,DecrementStencilOp as Yd,DecrementWrapStencilOp as qd,DefaultLoadingManager as Kd,DetachedBindMode as $d,DirectionalLight as Zd,DirectionalLightHelper as Qd,DiscreteInterpolant as Jd,DodecahedronGeometry as jd,DynamicCopyUsage as eu,DynamicDrawUsage as tu,DynamicReadUsage as nu,EdgesGeometry as iu,EllipseCurve as ru,EqualStencilFunc as au,ExtrudeGeometry as ou,FileLoader as su,Float16BufferAttribute as lu,Float32BufferAttribute as cu,Fog as fu,FogExp2 as du,FramebufferTexture as uu,GLBufferAttribute as pu,GLSL1 as hu,GreaterEqualStencilFunc as mu,GreaterStencilFunc as _u,GridHelper as gu,HemisphereLight as vu,HemisphereLightHelper as Eu,IcosahedronGeometry as Su,ImageBitmapLoader as Mu,ImageLoader as Tu,ImageUtils as xu,IncrementStencilOp as Au,IncrementWrapStencilOp as Ru,InstancedBufferAttribute as Cu,InstancedBufferGeometry as bu,InstancedInterleavedBuffer as Pu,InstancedMesh as Lu,Int16BufferAttribute as Uu,Int32BufferAttribute as Du,Int8BufferAttribute as wu,InterleavedBuffer as Iu,InterleavedBufferAttribute as yu,Interpolant as Nu,InterpolateDiscrete as Ou,InterpolateLinear as Fu,InterpolateSmooth as Bu,InvertStencilOp as Gu,KeepStencilOp as Hu,KeyframeTrack as Vu,LOD as ku,LatheGeometry as Wu,LessEqualStencilFunc as zu,LessStencilFunc as Xu,Light as Yu,LightProbe as qu,Line as Ku,Line3 as $u,LineBasicMaterial as Zu,LineCurve as Qu,LineCurve3 as Ju,LineDashedMaterial as ju,LineLoop as ep,LineSegments as tp,LinearInterpolant as np,LinearMipMapLinearFilter as ip,LinearMipMapNearestFilter as rp,Loader as ap,LoaderUtils as op,LoadingManager as sp,LoopOnce as lp,LoopPingPong as cp,LoopRepeat as fp,MOUSE as dp,Material as up,MaterialLoader as pp,MathUtils as hp,Matrix2 as mp,MeshLambertMaterial as _p,MeshMatcapMaterial as gp,MeshNormalMaterial as vp,MeshPhongMaterial as Ep,MeshPhysicalMaterial as Sp,MeshStandardMaterial as Mp,MeshToonMaterial as Tp,NearestMipMapLinearFilter as xp,NearestMipMapNearestFilter as Ap,NeverStencilFunc as Rp,NormalAnimationBlendMode as Cp,NotEqualStencilFunc as bp,NumberKeyframeTrack as Pp,Object3D as Lp,ObjectLoader as Up,OctahedronGeometry as Dp,Path as wp,PlaneHelper as Ip,PointLight as yp,PointLightHelper as Np,Points as Op,PointsMaterial as Fp,PolarGridHelper as Bp,PolyhedronGeometry as Gp,PositionalAudio as Hp,PropertyBinding as Vp,PropertyMixer as kp,QuadraticBezierCurve as Wp,QuadraticBezierCurve3 as zp,Quaternion as Xp,QuaternionKeyframeTrack as Yp,QuaternionLinearInterpolant as qp,RGBDepthPacking as Kp,RGBIntegerFormat as $p,RGDepthPacking as Zp,RawShaderMaterial as Qp,Ray as Jp,Raycaster as jp,RectAreaLight as eh,RenderTarget as th,ReplaceStencilOp as nh,RingGeometry as ih,Scene as rh,ShadowMaterial as ah,Shape as oh,ShapeGeometry as sh,ShapePath as lh,ShapeUtils as ch,Skeleton as fh,SkeletonHelper as dh,SkinnedMesh as uh,Source as ph,Sphere as hh,SphereGeometry as mh,Spherical as _h,SphericalHarmonics3 as gh,SplineCurve as vh,SpotLight as Eh,SpotLightHelper as Sh,Sprite as Mh,SpriteMaterial as Th,StaticCopyUsage as xh,StaticDrawUsage as Ah,StaticReadUsage as Rh,StereoCamera as Ch,StreamCopyUsage as bh,StreamDrawUsage as Ph,StreamReadUsage as Lh,StringKeyframeTrack as Uh,TOUCH as Dh,TetrahedronGeometry as wh,TextureLoader as Ih,TextureUtils as yh,TorusGeometry as Nh,TorusKnotGeometry as Oh,Triangle as Fh,TriangleFanDrawMode as Bh,TriangleStripDrawMode as Gh,TrianglesDrawMode as Hh,TubeGeometry as Vh,UVMapping as kh,Uint8BufferAttribute as Wh,Uint8ClampedBufferAttribute as zh,Uniform as Xh,UniformsGroup as Yh,VectorKeyframeTrack as qh,VideoTexture as Kh,WebGL3DRenderTarget as $h,WebGLArrayRenderTarget as Zh,WebGLMultipleRenderTargets as Qh,WebGPUCoordinateSystem as Jh,WireframeGeometry as jh,WrapAroundEnding as em,ZeroCurvatureEnding as tm,ZeroSlopeEnding as nm,ZeroStencilOp as im}from"./three.core.js";function Pr(){let e=null,n=!1,t=null,i=null;function l(o,h){t(o,h),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function uo(e){let n=new WeakMap;function t(f,C){let v=f.array,b=f.usage,R=v.byteLength,E=e.createBuffer();e.bindBuffer(C,E),e.bufferData(C,v,b),f.onUploadCallback();let x;if(v instanceof Float32Array)x=e.FLOAT;else if(v instanceof Uint16Array)f.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)x=e.SHORT;else if(v instanceof Uint32Array)x=e.UNSIGNED_INT;else if(v instanceof Int32Array)x=e.INT;else if(v instanceof Int8Array)x=e.BYTE;else if(v instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:x,bytesPerElement:v.BYTES_PER_ELEMENT,version:f.version,size:R}}function i(f,C,v){let b=C.array,R=C.updateRanges;if(e.bindBuffer(v,f),R.length===0)e.bufferSubData(v,0,b);else{R.sort((x,N)=>x.start-N.start);let E=0;for(let x=1;x<R.length;x++){let N=R[E],P=R[x];P.start<=N.start+N.count+1?N.count=Math.max(N.count,P.start+P.count-N.start):(++E,R[E]=P)}R.length=E+1;for(let x=0,N=R.length;x<N;x++){let P=R[x];e.bufferSubData(v,P.start*b.BYTES_PER_ELEMENT,b,P.start,P.count)}C.clearUpdateRanges()}C.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);let C=n.get(f);C&&(e.deleteBuffer(C.buffer),n.delete(f))}function h(f,C){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){let b=n.get(f);(!b||b.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}let v=n.get(f);if(v===void 0)n.set(f,t(f,C));else if(v.version<f.version){if(v.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,f,C),v.version=f.version}}return{get:l,remove:o,update:h}}var po=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ho=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_o=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,go=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,So=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,To=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ao=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ro=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Co=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Do=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Io=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,No=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Go=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ho=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ko=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wo="gl_FragColor = linearToOutputTexel( gl_FragColor );",zo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ko=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$o=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zo=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jo=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,es=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ts=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ns=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,is=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,as=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,os=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ss=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ls=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ds=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,us=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ms=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_s=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gs=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vs=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Es=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ss=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ms=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ts=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,As=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ps=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ls=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Us=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ds=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ws=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Is=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ys=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ns=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Os=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fs=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bs=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hs=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vs=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ks=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ws=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zs=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xs=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ys=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qs=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ks=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$s=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zs=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qs=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Js=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,js=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,el=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,il=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,al=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ol=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ll=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ul=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ml=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_l=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,El=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ml=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Al=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ll=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ul=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Il=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ol=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:po,alphahash_pars_fragment:ho,alphamap_fragment:mo,alphamap_pars_fragment:_o,alphatest_fragment:go,alphatest_pars_fragment:vo,aomap_fragment:Eo,aomap_pars_fragment:So,batching_pars_vertex:Mo,batching_vertex:To,begin_vertex:xo,beginnormal_vertex:Ao,bsdfs:Ro,iridescence_fragment:Co,bumpmap_pars_fragment:bo,clipping_planes_fragment:Po,clipping_planes_pars_fragment:Lo,clipping_planes_pars_vertex:Uo,clipping_planes_vertex:Do,color_fragment:wo,color_pars_fragment:Io,color_pars_vertex:yo,color_vertex:No,common:Oo,cube_uv_reflection_fragment:Fo,defaultnormal_vertex:Bo,displacementmap_pars_vertex:Go,displacementmap_vertex:Ho,emissivemap_fragment:Vo,emissivemap_pars_fragment:ko,colorspace_fragment:Wo,colorspace_pars_fragment:zo,envmap_fragment:Xo,envmap_common_pars_fragment:Yo,envmap_pars_fragment:qo,envmap_pars_vertex:Ko,envmap_physical_pars_fragment:as,envmap_vertex:$o,fog_vertex:Zo,fog_pars_vertex:Qo,fog_fragment:Jo,fog_pars_fragment:jo,gradientmap_pars_fragment:es,lightmap_pars_fragment:ts,lights_lambert_fragment:ns,lights_lambert_pars_fragment:is,lights_pars_begin:rs,lights_toon_fragment:os,lights_toon_pars_fragment:ss,lights_phong_fragment:ls,lights_phong_pars_fragment:cs,lights_physical_fragment:fs,lights_physical_pars_fragment:ds,lights_fragment_begin:us,lights_fragment_maps:ps,lights_fragment_end:hs,logdepthbuf_fragment:ms,logdepthbuf_pars_fragment:_s,logdepthbuf_pars_vertex:gs,logdepthbuf_vertex:vs,map_fragment:Es,map_pars_fragment:Ss,map_particle_fragment:Ms,map_particle_pars_fragment:Ts,metalnessmap_fragment:xs,metalnessmap_pars_fragment:As,morphinstance_vertex:Rs,morphcolor_vertex:Cs,morphnormal_vertex:bs,morphtarget_pars_vertex:Ps,morphtarget_vertex:Ls,normal_fragment_begin:Us,normal_fragment_maps:Ds,normal_pars_fragment:ws,normal_pars_vertex:Is,normal_vertex:ys,normalmap_pars_fragment:Ns,clearcoat_normal_fragment_begin:Os,clearcoat_normal_fragment_maps:Fs,clearcoat_pars_fragment:Bs,iridescence_pars_fragment:Gs,opaque_fragment:Hs,packing:Vs,premultiplied_alpha_fragment:ks,project_vertex:Ws,dithering_fragment:zs,dithering_pars_fragment:Xs,roughnessmap_fragment:Ys,roughnessmap_pars_fragment:qs,shadowmap_pars_fragment:Ks,shadowmap_pars_vertex:$s,shadowmap_vertex:Zs,shadowmask_pars_fragment:Qs,skinbase_vertex:Js,skinning_pars_vertex:js,skinning_vertex:el,skinnormal_vertex:tl,specularmap_fragment:nl,specularmap_pars_fragment:il,tonemapping_fragment:rl,tonemapping_pars_fragment:al,transmission_fragment:ol,transmission_pars_fragment:sl,uv_pars_fragment:ll,uv_pars_vertex:cl,uv_vertex:fl,worldpos_vertex:dl,background_vert:ul,background_frag:pl,backgroundCube_vert:hl,backgroundCube_frag:ml,cube_vert:_l,cube_frag:gl,depth_vert:vl,depth_frag:El,distanceRGBA_vert:Sl,distanceRGBA_frag:Ml,equirect_vert:Tl,equirect_frag:xl,linedashed_vert:Al,linedashed_frag:Rl,meshbasic_vert:Cl,meshbasic_frag:bl,meshlambert_vert:Pl,meshlambert_frag:Ll,meshmatcap_vert:Ul,meshmatcap_frag:Dl,meshnormal_vert:wl,meshnormal_frag:Il,meshphong_vert:yl,meshphong_frag:Nl,meshphysical_vert:Ol,meshphysical_frag:Fl,meshtoon_vert:Bl,meshtoon_frag:Gl,points_vert:Hl,points_frag:Vl,shadow_vert:kl,shadow_frag:Wl,sprite_vert:zl,sprite_frag:Xl},ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},vt={basic:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:lt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:lt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:lt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:lt([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:lt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:lt([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:lt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:lt([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:lt([ee.common,ee.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:lt([ee.lights,ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};vt.physical={uniforms:lt([vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var sn={r:0,b:0,g:0},bt=new pr,Yl=new kt;function ql(e,n,t,i,l,o,h){let f=new Ke(0),C=o===!0?0:1,v,b,R=null,E=0,x=null;function N(T){let _=T.isScene===!0?T.background:null;return _&&_.isTexture&&(_=(T.backgroundBlurriness>0?t:n).get(_)),_}function P(T){let _=!1,H=N(T);H===null?r(f,C):H&&H.isColor&&(r(H,1),_=!0);let U=e.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,h):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(T,_){let H=N(_);H&&(H.isCubeTexture||H.mapping===gn)?(b===void 0&&(b=new xt(new fr(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:si(vt.backgroundCube.uniforms),vertexShader:vt.backgroundCube.vertexShader,fragmentShader:vt.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(U,y,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(b)),bt.copy(_.backgroundRotation),bt.x*=-1,bt.y*=-1,bt.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(bt.y*=-1,bt.z*=-1),b.material.uniforms.envMap.value=H,b.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(Yl.makeRotationFromEuler(bt)),b.material.toneMapped=tt.getTransfer(H.colorSpace)!==Ye,(R!==H||E!==H.version||x!==e.toneMapping)&&(b.material.needsUpdate=!0,R=H,E=H.version,x=e.toneMapping),b.layers.enableAll(),T.unshift(b,b.geometry,b.material,0,0,null)):H&&H.isTexture&&(v===void 0&&(v=new xt(new dr(2,2),new It({name:"BackgroundMaterial",uniforms:si(vt.background.uniforms),vertexShader:vt.background.vertexShader,fragmentShader:vt.background.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(v)),v.material.uniforms.t2D.value=H,v.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.material.toneMapped=tt.getTransfer(H.colorSpace)!==Ye,H.matrixAutoUpdate===!0&&H.updateMatrix(),v.material.uniforms.uvTransform.value.copy(H.matrix),(R!==H||E!==H.version||x!==e.toneMapping)&&(v.material.needsUpdate=!0,R=H,E=H.version,x=e.toneMapping),v.layers.enableAll(),T.unshift(v,v.geometry,v.material,0,0,null))}function r(T,_){T.getRGB(sn,ur(e)),i.buffers.color.setClear(sn.r,sn.g,sn.b,_,h)}function I(){b!==void 0&&(b.geometry.dispose(),b.material.dispose()),v!==void 0&&(v.geometry.dispose(),v.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(T,_=1){f.set(T),C=_,r(f,C)},getClearAlpha:function(){return C},setClearAlpha:function(T){C=T,r(f,C)},render:P,addToRenderList:c,dispose:I}}function Kl(e,n){let t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=E(null),o=l,h=!1;function f(d,A,q,V,Y){let Q=!1,W=R(V,q,A);o!==W&&(o=W,v(o.object)),Q=x(d,V,q,Y),Q&&N(d,V,q,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,_(d,A,q,V),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function C(){return e.createVertexArray()}function v(d){return e.bindVertexArray(d)}function b(d){return e.deleteVertexArray(d)}function R(d,A,q){let V=q.wireframe===!0,Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let Q=Y[A.id];Q===void 0&&(Q={},Y[A.id]=Q);let W=Q[V];return W===void 0&&(W=E(C()),Q[V]=W),W}function E(d){let A=[],q=[],V=[];for(let Y=0;Y<t;Y++)A[Y]=0,q[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:q,attributeDivisors:V,object:d,attributes:{},index:null}}function x(d,A,q,V){let Y=o.attributes,Q=A.attributes,W=0,j=q.getAttributes();for(let F in j)if(j[F].location>=0){let Se=Y[F],Le=Q[F];if(Le===void 0&&(F==="instanceMatrix"&&d.instanceMatrix&&(Le=d.instanceMatrix),F==="instanceColor"&&d.instanceColor&&(Le=d.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;W++}return o.attributesNum!==W||o.index!==V}function N(d,A,q,V){let Y={},Q=A.attributes,W=0,j=q.getAttributes();for(let F in j)if(j[F].location>=0){let Se=Q[F];Se===void 0&&(F==="instanceMatrix"&&d.instanceMatrix&&(Se=d.instanceMatrix),F==="instanceColor"&&d.instanceColor&&(Se=d.instanceColor));let Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),Y[F]=Le,W++}o.attributes=Y,o.attributesNum=W,o.index=V}function P(){let d=o.newAttributes;for(let A=0,q=d.length;A<q;A++)d[A]=0}function c(d){r(d,0)}function r(d,A){let q=o.newAttributes,V=o.enabledAttributes,Y=o.attributeDivisors;q[d]=1,V[d]===0&&(e.enableVertexAttribArray(d),V[d]=1),Y[d]!==A&&(e.vertexAttribDivisor(d,A),Y[d]=A)}function I(){let d=o.newAttributes,A=o.enabledAttributes;for(let q=0,V=A.length;q<V;q++)A[q]!==d[q]&&(e.disableVertexAttribArray(q),A[q]=0)}function T(d,A,q,V,Y,Q,W){W===!0?e.vertexAttribIPointer(d,A,q,Y,Q):e.vertexAttribPointer(d,A,q,V,Y,Q)}function _(d,A,q,V){P();let Y=V.attributes,Q=q.getAttributes(),W=A.defaultAttributeValues;for(let j in Q){let F=Q[j];if(F.location>=0){let he=Y[j];if(he===void 0&&(j==="instanceMatrix"&&d.instanceMatrix&&(he=d.instanceMatrix),j==="instanceColor"&&d.instanceColor&&(he=d.instanceColor)),he!==void 0){let Se=he.normalized,Le=he.itemSize,Ge=n.get(he);if(Ge===void 0)continue;let Ze=Ge.buffer,k=Ge.type,J=Ge.bytesPerElement,ue=k===e.INT||k===e.UNSIGNED_INT||he.gpuType===hr;if(he.isInterleavedBufferAttribute){let ie=he.data,Me=ie.stride,Re=he.offset;if(ie.isInstancedInterleavedBuffer){for(let Ue=0;Ue<F.locationSize;Ue++)r(F.location+Ue,ie.meshPerAttribute);d.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<F.locationSize;Ue++)c(F.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<F.locationSize;Ue++)T(F.location+Ue,Le/F.locationSize,k,Se,Me*J,(Re+Le/F.locationSize*Ue)*J,ue)}else{if(he.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)r(F.location+ie,he.meshPerAttribute);d.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<F.locationSize;ie++)c(F.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let ie=0;ie<F.locationSize;ie++)T(F.location+ie,Le/F.locationSize,k,Se,Le*J,Le/F.locationSize*ie*J,ue)}}else if(W!==void 0){let Se=W[j];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(F.location,Se);break;case 3:e.vertexAttrib3fv(F.location,Se);break;case 4:e.vertexAttrib4fv(F.location,Se);break;default:e.vertexAttrib1fv(F.location,Se)}}}}I()}function H(){B();for(let d in i){let A=i[d];for(let q in A){let V=A[q];for(let Y in V)b(V[Y].object),delete V[Y];delete A[q]}delete i[d]}}function U(d){if(i[d.id]===void 0)return;let A=i[d.id];for(let q in A){let V=A[q];for(let Y in V)b(V[Y].object),delete V[Y];delete A[q]}delete i[d.id]}function y(d){for(let A in i){let q=i[A];if(q[d.id]===void 0)continue;let V=q[d.id];for(let Y in V)b(V[Y].object),delete V[Y];delete q[d.id]}}function B(){p(),h=!0,o!==l&&(o=l,v(o.object))}function p(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:p,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfProgram:y,initAttributes:P,enableAttribute:c,disableUnusedAttributes:I}}function $l(e,n,t){let i;function l(v){i=v}function o(v,b){e.drawArrays(i,v,b),t.update(b,i,1)}function h(v,b,R){R!==0&&(e.drawArraysInstanced(i,v,b,R),t.update(b,i,R))}function f(v,b,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,b,0,R);let x=0;for(let N=0;N<R;N++)x+=b[N];t.update(x,i,1)}function C(v,b,R,E){if(R===0)return;let x=n.get("WEBGL_multi_draw");if(x===null)for(let N=0;N<v.length;N++)h(v[N],b[N],E[N]);else{x.multiDrawArraysInstancedWEBGL(i,v,0,b,0,E,0,R);let N=0;for(let P=0;P<R;P++)N+=b[P]*E[P];t.update(N,i,1)}}this.setMode=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=C}function Zl(e,n,t,i){let l;function o(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){let y=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(y){return!(y!==Tt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(y){let B=y===vn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==yt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Dt&&!B)}function C(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=t.precision!==void 0?t.precision:"highp",b=C(v);b!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",b,"instead."),v=b);let R=t.logarithmicDepthBuffer===!0,E=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),I=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),H=N>0,U=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:C,textureFormatReadable:h,textureTypeReadable:f,precision:v,logarithmicDepthBuffer:R,reverseDepthBuffer:E,maxTextures:x,maxVertexTextures:N,maxTextureSize:P,maxCubemapSize:c,maxAttributes:r,maxVertexUniforms:I,maxVaryings:T,maxFragmentUniforms:_,vertexTextures:H,maxSamples:U}}function Ql(e){let n=this,t=null,i=0,l=!1,o=!1,h=new Br,f=new Be,C={value:null,needsUpdate:!1};this.uniform=C,this.numPlanes=0,this.numIntersection=0,this.init=function(R,E){let x=R.length!==0||E||i!==0||l;return l=E,i=R.length,x},this.beginShadows=function(){o=!0,b(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(R,E){t=b(R,E,0)},this.setState=function(R,E,x){let N=R.clippingPlanes,P=R.clipIntersection,c=R.clipShadows,r=e.get(R);if(!l||N===null||N.length===0||o&&!c)o?b(null):v();else{let I=o?0:i,T=I*4,_=r.clippingState||null;C.value=_,_=b(N,E,T,x);for(let H=0;H!==T;++H)_[H]=t[H];r.clippingState=_,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=I}};function v(){C.value!==t&&(C.value=t,C.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(R,E,x,N){let P=R!==null?R.length:0,c=null;if(P!==0){if(c=C.value,N!==!0||c===null){let r=x+P*4,I=E.matrixWorldInverse;f.getNormalMatrix(I),(c===null||c.length<r)&&(c=new Float32Array(r));for(let T=0,_=x;T!==P;++T,_+=4)h.copy(R[T]).applyMatrix4(I,f),h.normal.toArray(c,_),c[_+3]=h.constant}C.value=c,C.needsUpdate=!0}return n.numPlanes=P,n.numIntersection=0,c}}function Jl(e){let n=new WeakMap;function t(h,f){return f===Nn?h.mapping=jt:f===On&&(h.mapping=Wt),h}function i(h){if(h&&h.isTexture){let f=h.mapping;if(f===Nn||f===On)if(n.has(h)){let C=n.get(h).texture;return t(C,h.mapping)}else{let C=h.image;if(C&&C.height>0){let v=new Gr(C.height);return v.fromEquirectangularTexture(e,h),n.set(h,v),h.addEventListener("dispose",l),t(v.texture,h.mapping)}else return null}}return h}function l(h){let f=h.target;f.removeEventListener("dispose",l);let C=n.get(f);C!==void 0&&(n.delete(f),C.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}var Ht=4,Hi=[.125,.215,.35,.446,.526,.582],Ut=20,Ln=new Vr,Vi=new Ke,Un=null,Dn=0,wn=0,In=!1,Lt=(1+Math.sqrt(5))/2,Ot=1/Lt,ki=[new ke(-Lt,Ot,0),new ke(Lt,Ot,0),new ke(-Ot,0,Lt),new ke(Ot,0,Lt),new ke(0,Lt,-Ot),new ke(0,Lt,Ot),new ke(-1,1,-1),new ke(1,1,-1),new ke(-1,1,1),new ke(1,1,1)],_n=class{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,l=100){Un=this._renderer.getRenderTarget(),Dn=this._renderer.getActiveCubeFace(),wn=this._renderer.getActiveMipmapLevel(),In=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,l,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Un,Dn,wn),this._renderer.xr.enabled=In,n.scissorTest=!1,ln(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===jt||n.mapping===Wt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Un=this._renderer.getRenderTarget(),Dn=this._renderer.getActiveCubeFace(),wn=this._renderer.getActiveMipmapLevel(),In=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:vn,format:Tt,colorSpace:En,depthBuffer:!1},l=Wi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wi(n,t,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jl(o)),this._blurMaterial=ec(o,n,t)}return l}_compileMaterial(n){let t=new xt(this._lodPlanes[0],n);this._renderer.compile(t,Ln)}_sceneToCubeUV(n,t,i,l){let f=new fn(90,1,t,i),C=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],b=this._renderer,R=b.autoClear,E=b.toneMapping;b.getClearColor(Vi),b.toneMapping=At,b.autoClear=!1;let x=new Hr({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),N=new xt(new fr,x),P=!1,c=n.background;c?c.isColor&&(x.color.copy(c),n.background=null,P=!0):(x.color.copy(Vi),P=!0);for(let r=0;r<6;r++){let I=r%3;I===0?(f.up.set(0,C[r],0),f.lookAt(v[r],0,0)):I===1?(f.up.set(0,0,C[r]),f.lookAt(0,v[r],0)):(f.up.set(0,C[r],0),f.lookAt(0,0,v[r]));let T=this._cubeSize;ln(l,I*T,r>2?T:0,T,T),b.setRenderTarget(l),P&&b.render(N,f),b.render(n,f)}N.geometry.dispose(),N.material.dispose(),b.toneMapping=E,b.autoClear=R,n.background=c}_textureToCubeUV(n,t){let i=this._renderer,l=n.mapping===jt||n.mapping===Wt;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zi());let o=l?this._cubemapMaterial:this._equirectMaterial,h=new xt(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;let C=this._cubeSize;ln(t,0,0,3*C,2*C),i.setRenderTarget(t),i.render(h,Ln)}_applyPMREM(n){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let l=this._lodPlanes.length;for(let o=1;o<l;o++){let h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=ki[(l-o-1)%ki.length];this._blur(n,o-1,o,h,f)}t.autoClear=i}_blur(n,t,i,l,o){let h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,l,"latitudinal",o),this._halfBlur(h,n,i,i,l,"longitudinal",o)}_halfBlur(n,t,i,l,o,h,f){let C=this._renderer,v=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let b=3,R=new xt(this._lodPlanes[l],v),E=v.uniforms,x=this._sizeLods[i]-1,N=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ut-1),P=o/N,c=isFinite(o)?1+Math.floor(b*P):Ut;c>Ut&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Ut}`);let r=[],I=0;for(let y=0;y<Ut;++y){let B=y/P,p=Math.exp(-B*B/2);r.push(p),y===0?I+=p:y<c&&(I+=2*p)}for(let y=0;y<r.length;y++)r[y]=r[y]/I;E.envMap.value=n.texture,E.samples.value=c,E.weights.value=r,E.latitudinal.value=h==="latitudinal",f&&(E.poleAxis.value=f);let{_lodMax:T}=this;E.dTheta.value=N,E.mipInt.value=T-i;let _=this._sizeLods[l],H=3*_*(l>T-Ht?l-T+Ht:0),U=4*(this._cubeSize-_);ln(t,H,U,3*_,2*_),C.setRenderTarget(t),C.render(R,Ln)}};function jl(e){let n=[],t=[],i=[],l=e,o=e-Ht+1+Hi.length;for(let h=0;h<o;h++){let f=Math.pow(2,l);t.push(f);let C=1/f;h>e-Ht?C=Hi[h-e+Ht-1]:h===0&&(C=0),i.push(C);let v=1/(f-2),b=-v,R=1+v,E=[b,b,R,b,R,R,b,b,R,R,b,R],x=6,N=6,P=3,c=2,r=1,I=new Float32Array(P*N*x),T=new Float32Array(c*N*x),_=new Float32Array(r*N*x);for(let U=0;U<x;U++){let y=U%3*2/3-1,B=U>2?0:-1,p=[y,B,0,y+2/3,B,0,y+2/3,B+1,0,y,B,0,y+2/3,B+1,0,y,B+1,0];I.set(p,P*N*U),T.set(E,c*N*U);let d=[U,U,U,U,U,U];_.set(d,r*N*U)}let H=new mr;H.setAttribute("position",new dn(I,P)),H.setAttribute("uv",new dn(T,c)),H.setAttribute("faceIndex",new dn(_,r)),n.push(H),l>Ht&&l--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Wi(e,n,t){let i=new zt(e,n,t);return i.texture.mapping=gn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ln(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function ec(e,n,t){let i=new Float32Array(Ut),l=new ke(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Ut,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function zi(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Xi(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function jn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tc(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){let C=f.mapping,v=C===Nn||C===On,b=C===jt||C===Wt;if(v||b){let R=n.get(f),E=R!==void 0?R.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==E)return t===null&&(t=new _n(e)),R=v?t.fromEquirectangular(f,R):t.fromCubemap(f,R),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),R.texture;if(R!==void 0)return R.texture;{let x=f.image;return v&&x&&x.height>0||b&&x&&l(x)?(t===null&&(t=new _n(e)),R=v?t.fromEquirectangular(f):t.fromCubemap(f),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),f.addEventListener("dispose",o),R.texture):null}}}return f}function l(f){let C=0,v=6;for(let b=0;b<v;b++)f[b]!==void 0&&C++;return C===v}function o(f){let C=f.target;C.removeEventListener("dispose",o);let v=n.get(C);v!==void 0&&(n.delete(C),v.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function nc(e){let n={};function t(i){if(n[i]!==void 0)return n[i];let l;switch(i){case"WEBGL_depth_texture":l=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=e.getExtension(i)}return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let l=t(i);return l===null&&Ft("THREE.WebGLRenderer: "+i+" extension not supported."),l}}}function ic(e,n,t,i){let l={},o=new WeakMap;function h(R){let E=R.target;E.index!==null&&n.remove(E.index);for(let N in E.attributes)n.remove(E.attributes[N]);E.removeEventListener("dispose",h),delete l[E.id];let x=o.get(E);x&&(n.remove(x),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(R,E){return l[E.id]===!0||(E.addEventListener("dispose",h),l[E.id]=!0,t.memory.geometries++),E}function C(R){let E=R.attributes;for(let x in E)n.update(E[x],e.ARRAY_BUFFER)}function v(R){let E=[],x=R.index,N=R.attributes.position,P=0;if(x!==null){let I=x.array;P=x.version;for(let T=0,_=I.length;T<_;T+=3){let H=I[T+0],U=I[T+1],y=I[T+2];E.push(H,U,U,y,y,H)}}else if(N!==void 0){let I=N.array;P=N.version;for(let T=0,_=I.length/3-1;T<_;T+=3){let H=T+0,U=T+1,y=T+2;E.push(H,U,U,y,y,H)}}else return;let c=new(kr(E)?Wr:zr)(E,1);c.version=P;let r=o.get(R);r&&n.remove(r),o.set(R,c)}function b(R){let E=o.get(R);if(E){let x=R.index;x!==null&&E.version<x.version&&v(R)}else v(R);return o.get(R)}return{get:f,update:C,getWireframeAttribute:b}}function rc(e,n,t){let i;function l(E){i=E}let o,h;function f(E){o=E.type,h=E.bytesPerElement}function C(E,x){e.drawElements(i,x,o,E*h),t.update(x,i,1)}function v(E,x,N){N!==0&&(e.drawElementsInstanced(i,x,o,E*h,N),t.update(x,i,N))}function b(E,x,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,E,0,N);let c=0;for(let r=0;r<N;r++)c+=x[r];t.update(c,i,1)}function R(E,x,N,P){if(N===0)return;let c=n.get("WEBGL_multi_draw");if(c===null)for(let r=0;r<E.length;r++)v(E[r]/h,x[r],P[r]);else{c.multiDrawElementsInstancedWEBGL(i,x,0,o,E,0,P,0,N);let r=0;for(let I=0;I<N;I++)r+=x[I]*P[I];t.update(r,i,1)}}this.setMode=l,this.setIndex=f,this.render=C,this.renderInstances=v,this.renderMultiDraw=b,this.renderMultiDrawInstances=R}function ac(e){let n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,h,f){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function oc(e,n,t){let i=new WeakMap,l=new ct;function o(h,f,C){let v=h.morphTargetInfluences,b=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,R=b!==void 0?b.length:0,E=i.get(f);if(E===void 0||E.count!==R){let p=function(){y.dispose(),i.delete(f),f.removeEventListener("dispose",p)};E!==void 0&&E.texture.dispose();let x=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,c=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],I=f.morphAttributes.color||[],T=0;x===!0&&(T=1),N===!0&&(T=2),P===!0&&(T=3);let _=f.attributes.position.count*T,H=1;_>n.maxTextureSize&&(H=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);let U=new Float32Array(_*H*4*R),y=new _r(U,_,H,R);y.type=Dt,y.needsUpdate=!0;let B=T*4;for(let d=0;d<R;d++){let A=c[d],q=r[d],V=I[d],Y=_*H*4*d;for(let Q=0;Q<A.count;Q++){let W=Q*B;x===!0&&(l.fromBufferAttribute(A,Q),U[Y+W+0]=l.x,U[Y+W+1]=l.y,U[Y+W+2]=l.z,U[Y+W+3]=0),N===!0&&(l.fromBufferAttribute(q,Q),U[Y+W+4]=l.x,U[Y+W+5]=l.y,U[Y+W+6]=l.z,U[Y+W+7]=0),P===!0&&(l.fromBufferAttribute(V,Q),U[Y+W+8]=l.x,U[Y+W+9]=l.y,U[Y+W+10]=l.z,U[Y+W+11]=V.itemSize===4?l.w:1)}}E={count:R,texture:y,size:new ft(_,H)},i.set(f,E),f.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)C.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let x=0;for(let P=0;P<v.length;P++)x+=v[P];let N=f.morphTargetsRelative?1:1-x;C.getUniforms().setValue(e,"morphTargetBaseInfluence",N),C.getUniforms().setValue(e,"morphTargetInfluences",v)}C.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),C.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:o}}function sc(e,n,t,i){let l=new WeakMap;function o(C){let v=i.render.frame,b=C.geometry,R=n.get(C,b);if(l.get(R)!==v&&(n.update(R),l.set(R,v)),C.isInstancedMesh&&(C.hasEventListener("dispose",f)===!1&&C.addEventListener("dispose",f),l.get(C)!==v&&(t.update(C.instanceMatrix,e.ARRAY_BUFFER),C.instanceColor!==null&&t.update(C.instanceColor,e.ARRAY_BUFFER),l.set(C,v))),C.isSkinnedMesh){let E=C.skeleton;l.get(E)!==v&&(E.update(),l.set(E,v))}return R}function h(){l=new WeakMap}function f(C){let v=C.target;v.removeEventListener("dispose",f),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:o,dispose:h}}var Lr=new vr,Yi=new Er(1,1),Ur=new _r,Dr=new Xr,wr=new Yr,qi=[],Ki=[],$i=new Float32Array(16),Zi=new Float32Array(9),Qi=new Float32Array(4);function Xt(e,n,t){let i=e[0];if(i<=0||i>0)return e;let l=n*t,o=qi[l];if(o===void 0&&(o=new Float32Array(l),qi[l]=o),n!==0){i.toArray(o,0);for(let h=1,f=0;h!==n;++h)f+=t,e[h].toArray(o,f)}return o}function nt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function it(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Sn(e,n){let t=Ki[n];t===void 0&&(t=new Int32Array(n),Ki[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function lc(e,n){let t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function cc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2fv(this.addr,n),it(t,n)}}function fc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(nt(t,n))return;e.uniform3fv(this.addr,n),it(t,n)}}function dc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4fv(this.addr,n),it(t,n)}}function uc(e,n){let t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;Qi.set(i),e.uniformMatrix2fv(this.addr,!1,Qi),it(t,i)}}function pc(e,n){let t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;Zi.set(i),e.uniformMatrix3fv(this.addr,!1,Zi),it(t,i)}}function hc(e,n){let t=this.cache,i=n.elements;if(i===void 0){if(nt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),it(t,n)}else{if(nt(t,i))return;$i.set(i),e.uniformMatrix4fv(this.addr,!1,$i),it(t,i)}}function mc(e,n){let t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function _c(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2iv(this.addr,n),it(t,n)}}function gc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3iv(this.addr,n),it(t,n)}}function vc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4iv(this.addr,n),it(t,n)}}function Ec(e,n){let t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Sc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(nt(t,n))return;e.uniform2uiv(this.addr,n),it(t,n)}}function Mc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(nt(t,n))return;e.uniform3uiv(this.addr,n),it(t,n)}}function Tc(e,n){let t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(nt(t,n))return;e.uniform4uiv(this.addr,n),it(t,n)}}function xc(e,n,t){let i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let o;this.type===e.SAMPLER_2D_SHADOW?(Yi.compareFunction=gr,o=Yi):o=Lr,t.setTexture2D(n||o,l)}function Ac(e,n,t){let i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||Dr,l)}function Rc(e,n,t){let i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||wr,l)}function Cc(e,n,t){let i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||Ur,l)}function bc(e){switch(e){case 5126:return lc;case 35664:return cc;case 35665:return fc;case 35666:return dc;case 35674:return uc;case 35675:return pc;case 35676:return hc;case 5124:case 35670:return mc;case 35667:case 35671:return _c;case 35668:case 35672:return gc;case 35669:case 35673:return vc;case 5125:return Ec;case 36294:return Sc;case 36295:return Mc;case 36296:return Tc;case 35678:case 36198:case 36298:case 36306:case 35682:return xc;case 35679:case 36299:case 36307:return Ac;case 35680:case 36300:case 36308:case 36293:return Rc;case 36289:case 36303:case 36311:case 36292:return Cc}}function Pc(e,n){e.uniform1fv(this.addr,n)}function Lc(e,n){let t=Xt(n,this.size,2);e.uniform2fv(this.addr,t)}function Uc(e,n){let t=Xt(n,this.size,3);e.uniform3fv(this.addr,t)}function Dc(e,n){let t=Xt(n,this.size,4);e.uniform4fv(this.addr,t)}function wc(e,n){let t=Xt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Ic(e,n){let t=Xt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function yc(e,n){let t=Xt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Nc(e,n){e.uniform1iv(this.addr,n)}function Oc(e,n){e.uniform2iv(this.addr,n)}function Fc(e,n){e.uniform3iv(this.addr,n)}function Bc(e,n){e.uniform4iv(this.addr,n)}function Gc(e,n){e.uniform1uiv(this.addr,n)}function Hc(e,n){e.uniform2uiv(this.addr,n)}function Vc(e,n){e.uniform3uiv(this.addr,n)}function kc(e,n){e.uniform4uiv(this.addr,n)}function Wc(e,n,t){let i=this.cache,l=n.length,o=Sn(t,l);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let h=0;h!==l;++h)t.setTexture2D(n[h]||Lr,o[h])}function zc(e,n,t){let i=this.cache,l=n.length,o=Sn(t,l);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let h=0;h!==l;++h)t.setTexture3D(n[h]||Dr,o[h])}function Xc(e,n,t){let i=this.cache,l=n.length,o=Sn(t,l);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let h=0;h!==l;++h)t.setTextureCube(n[h]||wr,o[h])}function Yc(e,n,t){let i=this.cache,l=n.length,o=Sn(t,l);nt(i,o)||(e.uniform1iv(this.addr,o),it(i,o));for(let h=0;h!==l;++h)t.setTexture2DArray(n[h]||Ur,o[h])}function qc(e){switch(e){case 5126:return Pc;case 35664:return Lc;case 35665:return Uc;case 35666:return Dc;case 35674:return wc;case 35675:return Ic;case 35676:return yc;case 5124:case 35670:return Nc;case 35667:case 35671:return Oc;case 35668:case 35672:return Fc;case 35669:case 35673:return Bc;case 5125:return Gc;case 36294:return Hc;case 36295:return Vc;case 36296:return kc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return zc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Yc}}var zn=class{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bc(t.type)}},Xn=class{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qc(t.type)}},Yn=class{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){let l=this.seq;for(let o=0,h=l.length;o!==h;++o){let f=l[o];f.setValue(n,t[f.id],i)}}},yn=/(\w+)(\])?(\[|\.)?/g;function Ji(e,n){e.seq.push(n),e.map[n.id]=n}function Kc(e,n,t){let i=e.name,l=i.length;for(yn.lastIndex=0;;){let o=yn.exec(i),h=yn.lastIndex,f=o[1],C=o[2]==="]",v=o[3];if(C&&(f=f|0),v===void 0||v==="["&&h+2===l){Ji(t,v===void 0?new zn(f,e,n):new Xn(f,e,n));break}else{let R=t.map[f];R===void 0&&(R=new Yn(f),Ji(t,R)),t=R}}}var Vt=class{constructor(n,t){this.seq=[],this.map={};let i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){let o=n.getActiveUniform(t,l),h=n.getUniformLocation(t,o.name);Kc(o,h,this)}}setValue(n,t,i,l){let o=this.map[t];o!==void 0&&o.setValue(n,i,l)}setOptional(n,t,i){let l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let o=0,h=t.length;o!==h;++o){let f=t[o],C=i[f.id];C.needsUpdate!==!1&&f.setValue(n,C.value,l)}}static seqWithValue(n,t){let i=[];for(let l=0,o=n.length;l!==o;++l){let h=n[l];h.id in t&&i.push(h)}return i}};function ji(e,n,t){let i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}var $c=37297,Zc=0;function Qc(e,n){let t=e.split(`
`),i=[],l=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let h=l;h<o;h++){let f=h+1;i.push(`${f===n?">":" "} ${f}: ${t[h]}`)}return i.join(`
`)}var er=new Be;function Jc(e){tt._getMatrix(er,tt.workingColorSpace,e);let n=`mat3( ${er.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(e)){case Mr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function tr(e,n,t){let i=e.getShaderParameter(n,e.COMPILE_STATUS),l=e.getShaderInfoLog(n).trim();if(i&&l==="")return"";let o=/ERROR: 0:(\d+)/.exec(l);if(o){let h=parseInt(o[1]);return t.toUpperCase()+`

`+l+`

`+Qc(e.getShaderSource(n),h)}else return l}function jc(e,n){let t=Jc(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ef(e,n){let t;switch(n){case jr:t="Linear";break;case Jr:t="Reinhard";break;case Qr:t="Cineon";break;case Zr:t="ACESFilmic";break;case $r:t="AgX";break;case Kr:t="Neutral";break;case qr:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cn=new ke;function tf(){tt.getLuminanceCoefficients(cn);let e=cn.x.toFixed(4),n=cn.y.toFixed(4),t=cn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($t).join(`
`)}function rf(e){let n=[];for(let t in e){let i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function af(e,n){let t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){let o=e.getActiveAttrib(n,l),h=o.name,f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[h]={type:o.type,location:e.getAttribLocation(n,h),locationSize:f}}return t}function $t(e){return e!==""}function nr(e,n){let t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ir(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}var of=/^[ \t]*#include +<([\w\d./]+)>/gm;function qn(e){return e.replace(of,lf)}var sf=new Map;function lf(e,n){let t=Pe[n];if(t===void 0){let i=sf.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return qn(t)}var cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rr(e){return e.replace(cf,ff)}function ff(e,n,t,i){let l="";for(let o=parseInt(n);o<parseInt(t);o++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return l}function ar(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function df(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Sr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ea?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===St&&(n="SHADOWMAP_TYPE_VSM"),n}function uf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case jt:case Wt:n="ENVMAP_TYPE_CUBE";break;case gn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function pf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Wt:n="ENVMAP_MODE_REFRACTION";break}return n}function hf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ia:n="ENVMAP_BLENDING_MULTIPLY";break;case na:n="ENVMAP_BLENDING_MIX";break;case ta:n="ENVMAP_BLENDING_ADD";break}return n}function mf(e){let n=e.envMapCubeUVHeight;if(n===null)return null;let t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _f(e,n,t,i){let l=e.getContext(),o=t.defines,h=t.vertexShader,f=t.fragmentShader,C=df(t),v=uf(t),b=pf(t),R=hf(t),E=mf(t),x=nf(t),N=rf(o),P=l.createProgram(),c,r,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter($t).join(`
`),c.length>0&&(c+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter($t).join(`
`),r.length>0&&(r+=`
`)):(c=[ar(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+C:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($t).join(`
`),r=[ar(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+b:"",t.envMap?"#define "+R:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+C:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==At?"#define TONE_MAPPING":"",t.toneMapping!==At?Pe.tonemapping_pars_fragment:"",t.toneMapping!==At?ef("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,jc("linearToOutputTexel",t.outputColorSpace),tf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($t).join(`
`)),h=qn(h),h=nr(h,t),h=ir(h,t),f=qn(f),f=nr(f,t),f=ir(f,t),h=rr(h),f=rr(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,r=["#define varying in",t.glslVersion===li?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===li?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);let T=I+c+h,_=I+r+f,H=ji(l,l.VERTEX_SHADER,T),U=ji(l,l.FRAGMENT_SHADER,_);l.attachShader(P,H),l.attachShader(P,U),t.index0AttributeName!==void 0?l.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function y(A){if(e.debug.checkShaderErrors){let q=l.getProgramInfoLog(P).trim(),V=l.getShaderInfoLog(H).trim(),Y=l.getShaderInfoLog(U).trim(),Q=!0,W=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,P,H,U);else{let j=tr(l,H,"vertex"),F=tr(l,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+j+`
`+F)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||Y==="")&&(W=!1);W&&(A.diagnostics={runnable:Q,programLog:q,vertexShader:{log:V,prefix:c},fragmentShader:{log:Y,prefix:r}})}l.deleteShader(H),l.deleteShader(U),B=new Vt(l,P),p=af(l,P)}let B;this.getUniforms=function(){return B===void 0&&y(this),B};let p;this.getAttributes=function(){return p===void 0&&y(this),p};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=l.getProgramParameter(P,$c)),d},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zc++,this.cacheKey=n,this.usedTimes=1,this.program=P,this.vertexShader=H,this.fragmentShader=U,this}var gf=0,Kn=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){let t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),o=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(o)===!1&&(h.add(o),o.usedTimes++),this}remove(n){let t=this.materialCache.get(n);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){let t=this.materialCache,i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){let t=this.shaderCache,i=t.get(n);return i===void 0&&(i=new $n(n),t.set(n,i)),i}},$n=class{constructor(n){this.id=gf++,this.code=n,this.usedTimes=0}};function vf(e,n,t,i,l,o,h){let f=new sa,C=new Kn,v=new Set,b=[],R=l.logarithmicDepthBuffer,E=l.vertexTextures,x=l.precision,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(p){return v.add(p),p===0?"uv":`uv${p}`}function c(p,d,A,q,V){let Y=q.fog,Q=V.geometry,W=p.isMeshStandardMaterial?q.environment:null,j=(p.isMeshStandardMaterial?t:n).get(p.envMap||W),F=j&&j.mapping===gn?j.image.height:null,he=N[p.type];p.precision!==null&&(x=l.getMaxPrecision(p.precision),x!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",x,"instead."));let Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Le=Se!==void 0?Se.length:0,Ge=0;Q.morphAttributes.position!==void 0&&(Ge=1),Q.morphAttributes.normal!==void 0&&(Ge=2),Q.morphAttributes.color!==void 0&&(Ge=3);let Ze,k,J,ue;if(he){let We=vt[he];Ze=We.vertexShader,k=We.fragmentShader}else Ze=p.vertexShader,k=p.fragmentShader,C.update(p),J=C.getVertexShaderID(p),ue=C.getFragmentShaderID(p);let ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Re=V.isInstancedMesh===!0,Ue=V.isBatchedMesh===!0,$e=!!p.map,ye=!!p.matcap,je=!!j,m=!!p.aoMap,ut=!!p.lightMap,De=!!p.bumpMap,we=!!p.normalMap,me=!!p.displacementMap,Xe=!!p.emissiveMap,_e=!!p.metalnessMap,u=!!p.roughnessMap,a=p.anisotropy>0,L=p.clearcoat>0,z=p.dispersion>0,K=p.iridescence>0,G=p.sheen>0,pe=p.transmission>0,re=a&&!!p.anisotropyMap,le=L&&!!p.clearcoatMap,Ne=L&&!!p.clearcoatNormalMap,Z=L&&!!p.clearcoatRoughnessMap,ce=K&&!!p.iridescenceMap,Ee=K&&!!p.iridescenceThicknessMap,Te=G&&!!p.sheenColorMap,fe=G&&!!p.sheenRoughnessMap,Ie=!!p.specularMap,be=!!p.specularColorMap,ze=!!p.specularIntensityMap,g=pe&&!!p.transmissionMap,te=pe&&!!p.thicknessMap,O=!!p.gradientMap,X=!!p.alphaMap,oe=p.alphaTest>0,ae=!!p.alphaHash,Ce=!!p.extensions,Qe=At;p.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=e.toneMapping);let at={shaderID:he,shaderType:p.type,shaderName:p.name,vertexShader:Ze,fragmentShader:k,defines:p.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:x,batching:Ue,batchingColor:Ue&&V._colorsTexture!==null,instancing:Re,instancingColor:Re&&V.instanceColor!==null,instancingMorph:Re&&V.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:En,alphaToCoverage:!!p.alphaToCoverage,map:$e,matcap:ye,envMap:je,envMapMode:je&&j.mapping,envMapCubeUVHeight:F,aoMap:m,lightMap:ut,bumpMap:De,normalMap:we,displacementMap:E&&me,emissiveMap:Xe,normalMapObjectSpace:we&&p.normalMapType===ra,normalMapTangentSpace:we&&p.normalMapType===aa,metalnessMap:_e,roughnessMap:u,anisotropy:a,anisotropyMap:re,clearcoat:L,clearcoatMap:le,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Z,dispersion:z,iridescence:K,iridescenceMap:ce,iridescenceThicknessMap:Ee,sheen:G,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:be,specularIntensityMap:ze,transmission:pe,transmissionMap:g,thicknessMap:te,gradientMap:O,opaque:p.transparent===!1&&p.blending===un&&p.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:ae,combine:p.combine,mapUv:$e&&P(p.map.channel),aoMapUv:m&&P(p.aoMap.channel),lightMapUv:ut&&P(p.lightMap.channel),bumpMapUv:De&&P(p.bumpMap.channel),normalMapUv:we&&P(p.normalMap.channel),displacementMapUv:me&&P(p.displacementMap.channel),emissiveMapUv:Xe&&P(p.emissiveMap.channel),metalnessMapUv:_e&&P(p.metalnessMap.channel),roughnessMapUv:u&&P(p.roughnessMap.channel),anisotropyMapUv:re&&P(p.anisotropyMap.channel),clearcoatMapUv:le&&P(p.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&P(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&P(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&P(p.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&P(p.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&P(p.sheenColorMap.channel),sheenRoughnessMapUv:fe&&P(p.sheenRoughnessMap.channel),specularMapUv:Ie&&P(p.specularMap.channel),specularColorMapUv:be&&P(p.specularColorMap.channel),specularIntensityMapUv:ze&&P(p.specularIntensityMap.channel),transmissionMapUv:g&&P(p.transmissionMap.channel),thicknessMapUv:te&&P(p.thicknessMap.channel),alphaMapUv:X&&P(p.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(we||a),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&($e||X),fog:!!Y,useFog:p.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:R,reverseDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ge,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:Qe,decodeVideoTexture:$e&&p.map.isVideoTexture===!0&&tt.getTransfer(p.map.colorSpace)===Ye,decodeVideoTextureEmissive:Xe&&p.emissiveMap.isVideoTexture===!0&&tt.getTransfer(p.emissiveMap.colorSpace)===Ye,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Mt,flipSided:p.side===mt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Ce&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&p.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return at.vertexUv1s=v.has(1),at.vertexUv2s=v.has(2),at.vertexUv3s=v.has(3),v.clear(),at}function r(p){let d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(let A in p.defines)d.push(A),d.push(p.defines[A]);return p.isRawShaderMaterial===!1&&(I(d,p),T(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function I(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function T(p,d){f.disableAll(),d.supportsVertexTextures&&f.enable(0),d.instancing&&f.enable(1),d.instancingColor&&f.enable(2),d.instancingMorph&&f.enable(3),d.matcap&&f.enable(4),d.envMap&&f.enable(5),d.normalMapObjectSpace&&f.enable(6),d.normalMapTangentSpace&&f.enable(7),d.clearcoat&&f.enable(8),d.iridescence&&f.enable(9),d.alphaTest&&f.enable(10),d.vertexColors&&f.enable(11),d.vertexAlphas&&f.enable(12),d.vertexUv1s&&f.enable(13),d.vertexUv2s&&f.enable(14),d.vertexUv3s&&f.enable(15),d.vertexTangents&&f.enable(16),d.anisotropy&&f.enable(17),d.alphaHash&&f.enable(18),d.batching&&f.enable(19),d.dispersion&&f.enable(20),d.batchingColor&&f.enable(21),p.push(f.mask),f.disableAll(),d.fog&&f.enable(0),d.useFog&&f.enable(1),d.flatShading&&f.enable(2),d.logarithmicDepthBuffer&&f.enable(3),d.reverseDepthBuffer&&f.enable(4),d.skinning&&f.enable(5),d.morphTargets&&f.enable(6),d.morphNormals&&f.enable(7),d.morphColors&&f.enable(8),d.premultipliedAlpha&&f.enable(9),d.shadowMapEnabled&&f.enable(10),d.doubleSided&&f.enable(11),d.flipSided&&f.enable(12),d.useDepthPacking&&f.enable(13),d.dithering&&f.enable(14),d.transmission&&f.enable(15),d.sheen&&f.enable(16),d.opaque&&f.enable(17),d.pointsUvs&&f.enable(18),d.decodeVideoTexture&&f.enable(19),d.decodeVideoTextureEmissive&&f.enable(20),d.alphaToCoverage&&f.enable(21),p.push(f.mask)}function _(p){let d=N[p.type],A;if(d){let q=vt[d];A=oa.clone(q.uniforms)}else A=p.uniforms;return A}function H(p,d){let A;for(let q=0,V=b.length;q<V;q++){let Y=b[q];if(Y.cacheKey===d){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new _f(e,d,p,o),b.push(A)),A}function U(p){if(--p.usedTimes===0){let d=b.indexOf(p);b[d]=b[b.length-1],b.pop(),p.destroy()}}function y(p){C.remove(p)}function B(){C.dispose()}return{getParameters:c,getProgramCacheKey:r,getUniforms:_,acquireProgram:H,releaseProgram:U,releaseShaderCache:y,programs:b,dispose:B}}function Ef(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let f=e.get(h);return f===void 0&&(f={},e.set(h,f)),f}function i(h){e.delete(h)}function l(h,f,C){e.get(h)[f]=C}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:o}}function Sf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function or(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function sr(){let e=[],n=0,t=[],i=[],l=[];function o(){n=0,t.length=0,i.length=0,l.length=0}function h(R,E,x,N,P,c){let r=e[n];return r===void 0?(r={id:R.id,object:R,geometry:E,material:x,groupOrder:N,renderOrder:R.renderOrder,z:P,group:c},e[n]=r):(r.id=R.id,r.object=R,r.geometry=E,r.material=x,r.groupOrder=N,r.renderOrder=R.renderOrder,r.z=P,r.group=c),n++,r}function f(R,E,x,N,P,c){let r=h(R,E,x,N,P,c);x.transmission>0?i.push(r):x.transparent===!0?l.push(r):t.push(r)}function C(R,E,x,N,P,c){let r=h(R,E,x,N,P,c);x.transmission>0?i.unshift(r):x.transparent===!0?l.unshift(r):t.unshift(r)}function v(R,E){t.length>1&&t.sort(R||Sf),i.length>1&&i.sort(E||or),l.length>1&&l.sort(E||or)}function b(){for(let R=n,E=e.length;R<E;R++){let x=e[R];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:l,init:o,push:f,unshift:C,finish:b,sort:v}}function Mf(){let e=new WeakMap;function n(i,l){let o=e.get(i),h;return o===void 0?(h=new sr,e.set(i,[h])):l>=o.length?(h=new sr,o.push(h)):h=o[l],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function Tf(){let e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ke,color:new Ke};break;case"SpotLight":t={position:new ke,direction:new ke,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ke,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ke,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new ke,halfWidth:new ke,halfHeight:new ke};break}return e[n.id]=t,t}}}function xf(){let e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}var Af=0;function Rf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Cf(e){let n=new Tf,t=xf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new ke);let l=new ke,o=new kt,h=new kt;function f(v){let b=0,R=0,E=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let x=0,N=0,P=0,c=0,r=0,I=0,T=0,_=0,H=0,U=0,y=0;v.sort(Rf);for(let p=0,d=v.length;p<d;p++){let A=v[p],q=A.color,V=A.intensity,Y=A.distance,Q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)b+=q.r*V,R+=q.g*V,E+=q.b*V;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],V);y++}else if(A.isDirectionalLight){let W=n.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let j=A.shadow,F=t.get(A);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[x]=F,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=A.shadow.matrix,I++}i.directional[x]=W,x++}else if(A.isSpotLight){let W=n.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(q).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[P]=W;let j=A.shadow;if(A.map&&(i.spotLightMap[H]=A.map,H++,j.updateMatrices(A),A.castShadow&&U++),i.spotLightMatrix[P]=j.matrix,A.castShadow){let F=t.get(A);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[P]=F,i.spotShadowMap[P]=Q,_++}P++}else if(A.isRectAreaLight){let W=n.get(A);W.color.copy(q).multiplyScalar(V),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[c]=W,c++}else if(A.isPointLight){let W=n.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let j=A.shadow,F=t.get(A);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[N]=F,i.pointShadowMap[N]=Q,i.pointShadowMatrix[N]=A.shadow.matrix,T++}i.point[N]=W,N++}else if(A.isHemisphereLight){let W=n.get(A);W.skyColor.copy(A.color).multiplyScalar(V),W.groundColor.copy(A.groundColor).multiplyScalar(V),i.hemi[r]=W,r++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=R,i.ambient[2]=E;let B=i.hash;(B.directionalLength!==x||B.pointLength!==N||B.spotLength!==P||B.rectAreaLength!==c||B.hemiLength!==r||B.numDirectionalShadows!==I||B.numPointShadows!==T||B.numSpotShadows!==_||B.numSpotMaps!==H||B.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=P,i.rectArea.length=c,i.point.length=N,i.hemi.length=r,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=_+H-U,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=y,B.directionalLength=x,B.pointLength=N,B.spotLength=P,B.rectAreaLength=c,B.hemiLength=r,B.numDirectionalShadows=I,B.numPointShadows=T,B.numSpotShadows=_,B.numSpotMaps=H,B.numLightProbes=y,i.version=Af++)}function C(v,b){let R=0,E=0,x=0,N=0,P=0,c=b.matrixWorldInverse;for(let r=0,I=v.length;r<I;r++){let T=v[r];if(T.isDirectionalLight){let _=i.directional[R];_.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(l),_.direction.transformDirection(c),R++}else if(T.isSpotLight){let _=i.spot[x];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(c),_.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),_.direction.sub(l),_.direction.transformDirection(c),x++}else if(T.isRectAreaLight){let _=i.rectArea[N];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(c),h.identity(),o.copy(T.matrixWorld),o.premultiply(c),h.extractRotation(o),_.halfWidth.set(T.width*.5,0,0),_.halfHeight.set(0,T.height*.5,0),_.halfWidth.applyMatrix4(h),_.halfHeight.applyMatrix4(h),N++}else if(T.isPointLight){let _=i.point[E];_.position.setFromMatrixPosition(T.matrixWorld),_.position.applyMatrix4(c),E++}else if(T.isHemisphereLight){let _=i.hemi[P];_.direction.setFromMatrixPosition(T.matrixWorld),_.direction.transformDirection(c),P++}}}return{setup:f,setupView:C,state:i}}function lr(e){let n=new Cf(e),t=[],i=[];function l(b){v.camera=b,t.length=0,i.length=0}function o(b){t.push(b)}function h(b){i.push(b)}function f(){n.setup(t)}function C(b){n.setupView(t,b)}let v={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:l,state:v,setupLights:f,setupLightsView:C,pushLight:o,pushShadow:h}}function bf(e){let n=new WeakMap;function t(l,o=0){let h=n.get(l),f;return h===void 0?(f=new lr(e),n.set(l,[f])):o>=h.length?(f=new lr(e),h.push(f)):f=h[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}var Pf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uf(e,n,t){let i=new Tr,l=new ft,o=new ft,h=new ct,f=new la({depthPacking:ca}),C=new fa,v={},b=t.maxTextureSize,R={[Jt]:mt,[mt]:Jt,[Mt]:Mt},E=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Pf,fragmentShader:Lf}),x=E.clone();x.defines.HORIZONTAL_PASS=1;let N=new mr;N.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new xt(N,E),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let r=this.type;this.render=function(U,y,B){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||U.length===0)return;let p=e.getRenderTarget(),d=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),q=e.state;q.setBlending(wt),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let V=r!==St&&this.type===St,Y=r===St&&this.type!==St;for(let Q=0,W=U.length;Q<W;Q++){let j=U[Q],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);let he=F.getFrameExtents();if(l.multiply(he),o.copy(F.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(o.x=Math.floor(b/he.x),l.x=o.x*he.x,F.mapSize.x=o.x),l.y>b&&(o.y=Math.floor(b/he.y),l.y=o.y*he.y,F.mapSize.y=o.y)),F.map===null||V===!0||Y===!0){let Le=this.type!==St?{minFilter:Zt,magFilter:Zt}:{};F.map!==null&&F.map.dispose(),F.map=new zt(l.x,l.y,Le),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();let Se=F.getViewportCount();for(let Le=0;Le<Se;Le++){let Ge=F.getViewport(Le);h.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),q.viewport(h),F.updateMatrices(j,Le),i=F.getFrustum(),_(y,B,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===St&&I(F,B),F.needsUpdate=!1}r=this.type,c.needsUpdate=!1,e.setRenderTarget(p,d,A)};function I(U,y){let B=n.update(P);E.defines.VSM_SAMPLES!==U.blurSamples&&(E.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,E.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new zt(l.x,l.y)),E.uniforms.shadow_pass.value=U.map.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,e.setRenderTarget(U.mapPass),e.clear(),e.renderBufferDirect(y,null,B,E,P,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,e.setRenderTarget(U.map),e.clear(),e.renderBufferDirect(y,null,B,x,P,null)}function T(U,y,B,p){let d=null,A=B.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(A!==void 0)d=A;else if(d=B.isPointLight===!0?C:f,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let q=d.uuid,V=y.uuid,Y=v[q];Y===void 0&&(Y={},v[q]=Y);let Q=Y[V];Q===void 0&&(Q=d.clone(),Y[V]=Q,y.addEventListener("dispose",H)),d=Q}if(d.visible=y.visible,d.wireframe=y.wireframe,p===St?d.side=y.shadowSide!==null?y.shadowSide:y.side:d.side=y.shadowSide!==null?y.shadowSide:R[y.side],d.alphaMap=y.alphaMap,d.alphaTest=y.alphaTest,d.map=y.map,d.clipShadows=y.clipShadows,d.clippingPlanes=y.clippingPlanes,d.clipIntersection=y.clipIntersection,d.displacementMap=y.displacementMap,d.displacementScale=y.displacementScale,d.displacementBias=y.displacementBias,d.wireframeLinewidth=y.wireframeLinewidth,d.linewidth=y.linewidth,B.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let q=e.properties.get(d);q.light=B}return d}function _(U,y,B,p,d){if(U.visible===!1)return;if(U.layers.test(y.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&d===St)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,U.matrixWorld);let V=n.update(U),Y=U.material;if(Array.isArray(Y)){let Q=V.groups;for(let W=0,j=Q.length;W<j;W++){let F=Q[W],he=Y[F.materialIndex];if(he&&he.visible){let Se=T(U,he,p,d);U.onBeforeShadow(e,U,y,B,V,Se,F),e.renderBufferDirect(B,null,V,Se,U,F),U.onAfterShadow(e,U,y,B,V,Se,F)}}}else if(Y.visible){let Q=T(U,Y,p,d);U.onBeforeShadow(e,U,y,B,V,Q,null),e.renderBufferDirect(B,null,V,Q,U,null),U.onAfterShadow(e,U,y,B,V,Q,null)}}let q=U.children;for(let V=0,Y=q.length;V<Y;V++)_(q[V],y,B,p,d)}function H(U){U.target.removeEventListener("dispose",H);for(let B in v){let p=v[B],d=U.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}var Df={[Wn]:kn,[Vn]:Bn,[Hn]:Fn,[pn]:Gn,[kn]:Wn,[Bn]:Vn,[Fn]:Hn,[Gn]:pn};function wf(e,n){function t(){let g=!1,te=new ct,O=null,X=new ct(0,0,0,0);return{setMask:function(oe){O!==oe&&!g&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){g=oe},setClear:function(oe,ae,Ce,Qe,at){at===!0&&(oe*=Qe,ae*=Qe,Ce*=Qe),te.set(oe,ae,Ce,Qe),X.equals(te)===!1&&(e.clearColor(oe,ae,Ce,Qe),X.copy(te))},reset:function(){g=!1,O=null,X.set(-1,0,0,0)}}}function i(){let g=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(ae){if(te!==ae){let Ce=n.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);let Qe=oe;oe=null,this.setClear(Qe)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){O!==ae&&!g&&(e.depthMask(ae),O=ae)},setFunc:function(ae){if(te&&(ae=Df[ae]),X!==ae){switch(ae){case Wn:e.depthFunc(e.NEVER);break;case kn:e.depthFunc(e.ALWAYS);break;case Vn:e.depthFunc(e.LESS);break;case pn:e.depthFunc(e.LEQUAL);break;case Hn:e.depthFunc(e.EQUAL);break;case Gn:e.depthFunc(e.GEQUAL);break;case Bn:e.depthFunc(e.GREATER);break;case Fn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=ae}},setLocked:function(ae){g=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){g=!1,O=null,X=null,oe=null,te=!1}}}function l(){let g=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null;return{setTest:function(We){g||(We?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(We){te!==We&&!g&&(e.stencilMask(We),te=We)},setFunc:function(We,_t,Et){(O!==We||X!==_t||oe!==Et)&&(e.stencilFunc(We,_t,Et),O=We,X=_t,oe=Et)},setOp:function(We,_t,Et){(ae!==We||Ce!==_t||Qe!==Et)&&(e.stencilOp(We,_t,Et),ae=We,Ce=_t,Qe=Et)},setLocked:function(We){g=We},setClear:function(We){at!==We&&(e.clearStencil(We),at=We)},reset:function(){g=!1,te=null,O=null,X=null,oe=null,ae=null,Ce=null,Qe=null,at=null}}}let o=new t,h=new i,f=new l,C=new WeakMap,v=new WeakMap,b={},R={},E=new WeakMap,x=[],N=null,P=!1,c=null,r=null,I=null,T=null,_=null,H=null,U=null,y=new Ke(0,0,0),B=0,p=!1,d=null,A=null,q=null,V=null,Y=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=j>=2);let he=null,Se={},Le=e.getParameter(e.SCISSOR_BOX),Ge=e.getParameter(e.VIEWPORT),Ze=new ct().fromArray(Le),k=new ct().fromArray(Ge);function J(g,te,O,X){let oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(g,ae),e.texParameteri(g,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(g,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ce=0;Ce<O;Ce++)g===e.TEXTURE_3D||g===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}let ue={};ue[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),h.setClear(1),f.setClear(0),ie(e.DEPTH_TEST),h.setFunc(pn),De(!1),we(ui),ie(e.CULL_FACE),m(wt);function ie(g){b[g]!==!0&&(e.enable(g),b[g]=!0)}function Me(g){b[g]!==!1&&(e.disable(g),b[g]=!1)}function Re(g,te){return R[g]!==te?(e.bindFramebuffer(g,te),R[g]=te,g===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),g===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ue(g,te){let O=x,X=!1;if(g){O=E.get(te),O===void 0&&(O=[],E.set(te,O));let oe=g.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ce=oe.length;ae<Ce;ae++)O[ae]=e.COLOR_ATTACHMENT0+ae;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function $e(g){return N!==g?(e.useProgram(g),N=g,!0):!1}let ye={[qt]:e.FUNC_ADD,[da]:e.FUNC_SUBTRACT,[ua]:e.FUNC_REVERSE_SUBTRACT};ye[Da]=e.MIN,ye[wa]=e.MAX;let je={[pa]:e.ZERO,[ha]:e.ONE,[ma]:e.SRC_COLOR,[_a]:e.SRC_ALPHA,[ga]:e.SRC_ALPHA_SATURATE,[va]:e.DST_COLOR,[Ea]:e.DST_ALPHA,[Sa]:e.ONE_MINUS_SRC_COLOR,[Ma]:e.ONE_MINUS_SRC_ALPHA,[Ta]:e.ONE_MINUS_DST_COLOR,[xa]:e.ONE_MINUS_DST_ALPHA,[Aa]:e.CONSTANT_COLOR,[Ra]:e.ONE_MINUS_CONSTANT_COLOR,[Ca]:e.CONSTANT_ALPHA,[ba]:e.ONE_MINUS_CONSTANT_ALPHA};function m(g,te,O,X,oe,ae,Ce,Qe,at,We){if(g===wt){P===!0&&(Me(e.BLEND),P=!1);return}if(P===!1&&(ie(e.BLEND),P=!0),g!==Pa){if(g!==c||We!==p){if((r!==qt||_!==qt)&&(e.blendEquation(e.FUNC_ADD),r=qt,_=qt),We)switch(g){case un:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case di:e.blendFunc(e.ONE,e.ONE);break;case fi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ci:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case un:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case di:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case fi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ci:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}I=null,T=null,H=null,U=null,y.set(0,0,0),B=0,c=g,p=We}return}oe=oe||te,ae=ae||O,Ce=Ce||X,(te!==r||oe!==_)&&(e.blendEquationSeparate(ye[te],ye[oe]),r=te,_=oe),(O!==I||X!==T||ae!==H||Ce!==U)&&(e.blendFuncSeparate(je[O],je[X],je[ae],je[Ce]),I=O,T=X,H=ae,U=Ce),(Qe.equals(y)===!1||at!==B)&&(e.blendColor(Qe.r,Qe.g,Qe.b,at),y.copy(Qe),B=at),c=g,p=!1}function ut(g,te){g.side===Mt?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=g.side===mt;te&&(O=!O),De(O),g.blending===un&&g.transparent===!1?m(wt):m(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),h.setFunc(g.depthFunc),h.setTest(g.depthTest),h.setMask(g.depthWrite),o.setMask(g.colorWrite);let X=g.stencilWrite;f.setTest(X),X&&(f.setMask(g.stencilWriteMask),f.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),f.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),Xe(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(g){d!==g&&(g?e.frontFace(e.CW):e.frontFace(e.CCW),d=g)}function we(g){g!==La?(ie(e.CULL_FACE),g!==A&&(g===ui?e.cullFace(e.BACK):g===Ua?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),A=g}function me(g){g!==q&&(W&&e.lineWidth(g),q=g)}function Xe(g,te,O){g?(ie(e.POLYGON_OFFSET_FILL),(V!==te||Y!==O)&&(e.polygonOffset(te,O),V=te,Y=O)):Me(e.POLYGON_OFFSET_FILL)}function _e(g){g?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function u(g){g===void 0&&(g=e.TEXTURE0+Q-1),he!==g&&(e.activeTexture(g),he=g)}function a(g,te,O){O===void 0&&(he===null?O=e.TEXTURE0+Q-1:O=he);let X=Se[O];X===void 0&&(X={type:void 0,texture:void 0},Se[O]=X),(X.type!==g||X.texture!==te)&&(he!==O&&(e.activeTexture(O),he=O),e.bindTexture(g,te||ue[g]),X.type=g,X.texture=te)}function L(){let g=Se[he];g!==void 0&&g.type!==void 0&&(e.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function G(){try{e.texSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function le(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ne(){try{e.texStorage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Z(){try{e.texStorage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ce(){try{e.texImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Te(g){Ze.equals(g)===!1&&(e.scissor(g.x,g.y,g.z,g.w),Ze.copy(g))}function fe(g){k.equals(g)===!1&&(e.viewport(g.x,g.y,g.z,g.w),k.copy(g))}function Ie(g,te){let O=v.get(te);O===void 0&&(O=new WeakMap,v.set(te,O));let X=O.get(g);X===void 0&&(X=e.getUniformBlockIndex(te,g.name),O.set(g,X))}function be(g,te){let X=v.get(te).get(g);C.get(te)!==X&&(e.uniformBlockBinding(te,X,g.__bindingPointIndex),C.set(te,X))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},he=null,Se={},R={},E=new WeakMap,x=[],N=null,P=!1,c=null,r=null,I=null,T=null,_=null,H=null,U=null,y=new Ke(0,0,0),B=0,p=!1,d=null,A=null,q=null,V=null,Y=null,Ze.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),o.reset(),h.reset(),f.reset()}return{buffers:{color:o,depth:h,stencil:f},enable:ie,disable:Me,bindFramebuffer:Re,drawBuffers:Ue,useProgram:$e,setBlending:m,setMaterial:ut,setFlipSided:De,setCullFace:we,setLineWidth:me,setPolygonOffset:Xe,setScissorTest:_e,activeTexture:u,bindTexture:a,unbindTexture:L,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:ce,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:be,texStorage2D:Ne,texStorage3D:Z,texSubImage2D:G,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:Te,viewport:fe,reset:ze}}function If(e,n,t,i,l,o,h){let f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,C=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new ft,b=new WeakMap,R,E=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(u,a){return x?new OffscreenCanvas(u,a):za("canvas")}function P(u,a,L){let z=1,K=_e(u);if((K.width>L||K.height>L)&&(z=L/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){let G=Math.floor(z*K.width),pe=Math.floor(z*K.height);R===void 0&&(R=N(G,pe));let re=a?N(G,pe):R;return re.width=G,re.height=pe,re.getContext("2d").drawImage(u,0,0,G,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+pe+")."),re}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),u;return u}function c(u){return u.generateMipmaps}function r(u){e.generateMipmap(u)}function I(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(u,a,L,z,K=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let G=a;if(a===e.RED&&(L===e.FLOAT&&(G=e.R32F),L===e.HALF_FLOAT&&(G=e.R16F),L===e.UNSIGNED_BYTE&&(G=e.R8)),a===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(G=e.R8UI),L===e.UNSIGNED_SHORT&&(G=e.R16UI),L===e.UNSIGNED_INT&&(G=e.R32UI),L===e.BYTE&&(G=e.R8I),L===e.SHORT&&(G=e.R16I),L===e.INT&&(G=e.R32I)),a===e.RG&&(L===e.FLOAT&&(G=e.RG32F),L===e.HALF_FLOAT&&(G=e.RG16F),L===e.UNSIGNED_BYTE&&(G=e.RG8)),a===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(G=e.RG8UI),L===e.UNSIGNED_SHORT&&(G=e.RG16UI),L===e.UNSIGNED_INT&&(G=e.RG32UI),L===e.BYTE&&(G=e.RG8I),L===e.SHORT&&(G=e.RG16I),L===e.INT&&(G=e.RG32I)),a===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(G=e.RGB8UI),L===e.UNSIGNED_SHORT&&(G=e.RGB16UI),L===e.UNSIGNED_INT&&(G=e.RGB32UI),L===e.BYTE&&(G=e.RGB8I),L===e.SHORT&&(G=e.RGB16I),L===e.INT&&(G=e.RGB32I)),a===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),L===e.UNSIGNED_INT&&(G=e.RGBA32UI),L===e.BYTE&&(G=e.RGBA8I),L===e.SHORT&&(G=e.RGBA16I),L===e.INT&&(G=e.RGBA32I)),a===e.RGB&&L===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),a===e.RGBA){let pe=K?Mr:tt.getTransfer(z);L===e.FLOAT&&(G=e.RGBA32F),L===e.HALF_FLOAT&&(G=e.RGBA16F),L===e.UNSIGNED_BYTE&&(G=pe===Ye?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function _(u,a){let L;return u?a===null||a===en||a===tn?L=e.DEPTH24_STENCIL8:a===Dt?L=e.DEPTH32F_STENCIL8:a===mn&&(L=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===en||a===tn?L=e.DEPTH_COMPONENT24:a===Dt?L=e.DEPTH_COMPONENT32F:a===mn&&(L=e.DEPTH_COMPONENT16),L}function H(u,a){return c(u)===!0||u.isFramebufferTexture&&u.minFilter!==Zt&&u.minFilter!==Gt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function U(u){let a=u.target;a.removeEventListener("dispose",U),B(a),a.isVideoTexture&&b.delete(a)}function y(u){let a=u.target;a.removeEventListener("dispose",y),d(a)}function B(u){let a=i.get(u);if(a.__webglInit===void 0)return;let L=u.source,z=E.get(L);if(z){let K=z[a.__cacheKey];K.usedTimes--,K.usedTimes===0&&p(u),Object.keys(z).length===0&&E.delete(L)}i.remove(u)}function p(u){let a=i.get(u);e.deleteTexture(a.__webglTexture);let L=u.source,z=E.get(L);delete z[a.__cacheKey],h.memory.textures--}function d(u){let a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(a.__webglFramebuffer[z]))for(let K=0;K<a.__webglFramebuffer[z].length;K++)e.deleteFramebuffer(a.__webglFramebuffer[z][K]);else e.deleteFramebuffer(a.__webglFramebuffer[z]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[z])}else{if(Array.isArray(a.__webglFramebuffer))for(let z=0;z<a.__webglFramebuffer.length;z++)e.deleteFramebuffer(a.__webglFramebuffer[z]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let z=0;z<a.__webglColorRenderbuffer.length;z++)a.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[z]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}let L=u.textures;for(let z=0,K=L.length;z<K;z++){let G=i.get(L[z]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),h.memory.textures--),i.remove(L[z])}i.remove(u)}let A=0;function q(){A=0}function V(){let u=A;return u>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+l.maxTextures),A+=1,u}function Y(u){let a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function Q(u,a){let L=i.get(u);if(u.isVideoTexture&&me(u),u.isRenderTargetTexture===!1&&u.version>0&&L.__version!==u.version){let z=u.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(L,u,a);return}}t.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+a)}function W(u,a){let L=i.get(u);if(u.version>0&&L.__version!==u.version){k(L,u,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+a)}function j(u,a){let L=i.get(u);if(u.version>0&&L.__version!==u.version){k(L,u,a);return}t.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+a)}function F(u,a){let L=i.get(u);if(u.version>0&&L.__version!==u.version){J(L,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+a)}let he={[Ia]:e.REPEAT,[ya]:e.CLAMP_TO_EDGE,[Na]:e.MIRRORED_REPEAT},Se={[Zt]:e.NEAREST,[Oa]:e.NEAREST_MIPMAP_NEAREST,[an]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[xn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},Le={[Fa]:e.NEVER,[Ba]:e.ALWAYS,[Ga]:e.LESS,[gr]:e.LEQUAL,[Ha]:e.EQUAL,[Va]:e.GEQUAL,[ka]:e.GREATER,[Wa]:e.NOTEQUAL};function Ge(u,a){if(a.type===Dt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Gt||a.magFilter===xn||a.magFilter===an||a.magFilter===Kt||a.minFilter===Gt||a.minFilter===xn||a.minFilter===an||a.minFilter===Kt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,he[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Le[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Zt||a.minFilter!==an&&a.minFilter!==Kt||a.type===Dt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){let L=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,l.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ze(u,a){let L=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",U));let z=a.source,K=E.get(z);K===void 0&&(K={},E.set(z,K));let G=Y(a);if(G!==u.__cacheKey){K[G]===void 0&&(K[G]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,L=!0),K[G].usedTimes++;let pe=K[u.__cacheKey];pe!==void 0&&(K[u.__cacheKey].usedTimes--,pe.usedTimes===0&&p(a)),u.__cacheKey=G,u.__webglTexture=K[G].texture}return L}function k(u,a,L){let z=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(z=e.TEXTURE_3D);let K=Ze(u,a),G=a.source;t.bindTexture(z,u.__webglTexture,e.TEXTURE0+L);let pe=i.get(G);if(G.version!==pe.__version||K===!0){t.activeTexture(e.TEXTURE0+L);let re=tt.getPrimaries(tt.workingColorSpace),le=a.colorSpace===Bt?null:tt.getPrimaries(a.colorSpace),Ne=a.colorSpace===Bt||re===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Z=P(a.image,!1,l.maxTextureSize);Z=Xe(a,Z);let ce=o.convert(a.format,a.colorSpace),Ee=o.convert(a.type),Te=T(a.internalFormat,ce,Ee,a.colorSpace,a.isVideoTexture);Ge(z,a);let fe,Ie=a.mipmaps,be=a.isVideoTexture!==!0,ze=pe.__version===void 0||K===!0,g=G.dataReady,te=H(a,Z);if(a.isDepthTexture)Te=_(a.format===hn,a.type),ze&&(be?t.texStorage2D(e.TEXTURE_2D,1,Te,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,Te,Z.width,Z.height,0,ce,Ee,null));else if(a.isDataTexture)if(Ie.length>0){be&&ze&&t.texStorage2D(e.TEXTURE_2D,te,Te,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,ce,Ee,fe.data);a.generateMipmaps=!1}else be?(ze&&t.texStorage2D(e.TEXTURE_2D,te,Te,Z.width,Z.height),g&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Z.width,Z.height,ce,Ee,Z.data)):t.texImage2D(e.TEXTURE_2D,0,Te,Z.width,Z.height,0,ce,Ee,Z.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){be&&ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,Ie[0].width,Ie[0].height,Z.depth);for(let O=0,X=Ie.length;O<X;O++)if(fe=Ie[O],a.format!==Tt)if(ce!==null)if(be){if(g)if(a.layerUpdates.size>0){let oe=pi(fe.width,fe.height,a.format,a.type);for(let ae of a.layerUpdates){let Ce=fe.data.subarray(ae*oe/fe.data.BYTES_PER_ELEMENT,(ae+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ae,fe.width,fe.height,1,ce,Ce)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,ce,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Te,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?g&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,Z.depth,ce,Ee,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,Te,fe.width,fe.height,Z.depth,0,ce,Ee,fe.data)}else{be&&ze&&t.texStorage2D(e.TEXTURE_2D,te,Te,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],a.format!==Tt?ce!==null?be?g&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,ce,Ee,fe.data)}else if(a.isDataArrayTexture)if(be){if(ze&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,Z.width,Z.height,Z.depth),g)if(a.layerUpdates.size>0){let O=pi(Z.width,Z.height,a.format,a.type);for(let X of a.layerUpdates){let oe=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,ce,Ee,oe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ee,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Te,Z.width,Z.height,Z.depth,0,ce,Ee,Z.data);else if(a.isData3DTexture)be?(ze&&t.texStorage3D(e.TEXTURE_3D,te,Te,Z.width,Z.height,Z.depth),g&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ee,Z.data)):t.texImage3D(e.TEXTURE_3D,0,Te,Z.width,Z.height,Z.depth,0,ce,Ee,Z.data);else if(a.isFramebufferTexture){if(ze)if(be)t.texStorage2D(e.TEXTURE_2D,te,Te,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,Te,O,X,0,ce,Ee,null),O>>=1,X>>=1}}else if(Ie.length>0){if(be&&ze){let O=_e(Ie[0]);t.texStorage2D(e.TEXTURE_2D,te,Te,O.width,O.height)}for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],be?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,ce,Ee,fe):t.texImage2D(e.TEXTURE_2D,O,Te,ce,Ee,fe);a.generateMipmaps=!1}else if(be){if(ze){let O=_e(Z);t.texStorage2D(e.TEXTURE_2D,te,Te,O.width,O.height)}g&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Ee,Z)}else t.texImage2D(e.TEXTURE_2D,0,Te,ce,Ee,Z);c(a)&&r(z),pe.__version=G.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function J(u,a,L){if(a.image.length!==6)return;let z=Ze(u,a),K=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+L);let G=i.get(K);if(K.version!==G.__version||z===!0){t.activeTexture(e.TEXTURE0+L);let pe=tt.getPrimaries(tt.workingColorSpace),re=a.colorSpace===Bt?null:tt.getPrimaries(a.colorSpace),le=a.colorSpace===Bt||pe===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ne=a.isCompressedTexture||a.image[0].isCompressedTexture,Z=a.image[0]&&a.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!Ne&&!Z?ce[X]=P(a.image[X],!0,l.maxCubemapSize):ce[X]=Z?a.image[X].image:a.image[X],ce[X]=Xe(a,ce[X]);let Ee=ce[0],Te=o.convert(a.format,a.colorSpace),fe=o.convert(a.type),Ie=T(a.internalFormat,Te,fe,a.colorSpace),be=a.isVideoTexture!==!0,ze=G.__version===void 0||z===!0,g=K.dataReady,te=H(a,Ee);Ge(e.TEXTURE_CUBE_MAP,a);let O;if(Ne){be&&ze&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,Ee.width,Ee.height);for(let X=0;X<6;X++){O=ce[X].mipmaps;for(let oe=0;oe<O.length;oe++){let ae=O[oe];a.format!==Tt?Te!==null?be?g&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,Te,fe,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,ae.width,ae.height,0,Te,fe,ae.data)}}}else{if(O=a.mipmaps,be&&ze){O.length>0&&te++;let X=_e(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,X.width,X.height)}for(let X=0;X<6;X++)if(Z){be?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,Te,fe,ce[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,ce[X].width,ce[X].height,0,Te,fe,ce[X].data);for(let oe=0;oe<O.length;oe++){let Ce=O[oe].image[X].image;be?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Ce.width,Ce.height,Te,fe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Ce.width,Ce.height,0,Te,fe,Ce.data)}}else{be?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,fe,ce[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,Te,fe,ce[X]);for(let oe=0;oe<O.length;oe++){let ae=O[oe];be?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Te,fe,ae.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Te,fe,ae.image[X])}}}c(a)&&r(e.TEXTURE_CUBE_MAP),G.__version=K.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function ue(u,a,L,z,K,G){let pe=o.convert(L.format,L.colorSpace),re=o.convert(L.type),le=T(L.internalFormat,pe,re,L.colorSpace),Ne=i.get(a),Z=i.get(L);if(Z.__renderTarget=a,!Ne.__hasExternalTextures){let ce=Math.max(1,a.width>>G),Ee=Math.max(1,a.height>>G);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,G,le,ce,Ee,a.depth,0,pe,re,null):t.texImage2D(K,G,le,ce,Ee,0,pe,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),we(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,K,Z.__webglTexture,0,De(a)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,K,Z.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(u,a,L){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){let z=a.depthTexture,K=z&&z.isDepthTexture?z.type:null,G=_(a.stencilBuffer,K),pe=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=De(a);we(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,G,a.width,a.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,G,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,G,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,u)}else{let z=a.textures;for(let K=0;K<z.length;K++){let G=z[K],pe=o.convert(G.format,G.colorSpace),re=o.convert(G.type),le=T(G.internalFormat,pe,re,G.colorSpace),Ne=De(a);L&&we(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,le,a.width,a.height):we(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne,le,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,le,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=i.get(a.depthTexture);z.__renderTarget=a,(!z.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),Q(a.depthTexture,0);let K=z.__webglTexture,G=De(a);if(a.depthTexture.format===Jn)we(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(a.depthTexture.format===hn)we(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Re(u){let a=i.get(u),L=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){let z=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),z){let K=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),a.__depthDisposeCallback=K}a.__boundDepthTexture=z}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Me(a.__webglFramebuffer,u)}else if(L){a.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[z]),a.__webglDepthbuffer[z]===void 0)a.__webglDepthbuffer[z]=e.createRenderbuffer(),ie(a.__webglDepthbuffer[z],u,!1);else{let K=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=a.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,G)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),ie(a.__webglDepthbuffer,u,!1);else{let z=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ue(u,a,L){let z=i.get(u);a!==void 0&&ue(z.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&Re(u)}function $e(u){let a=u.texture,L=i.get(u),z=i.get(a);u.addEventListener("dispose",y);let K=u.textures,G=u.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=a.version,h.memory.textures++),G){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let le=0;le<a.mipmaps.length;le++)L.__webglFramebuffer[re][le]=e.createFramebuffer()}else L.__webglFramebuffer[re]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<a.mipmaps.length;re++)L.__webglFramebuffer[re]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(pe)for(let re=0,le=K.length;re<le;re++){let Ne=i.get(K[re]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&we(u)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){let le=K[re];L.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[re]);let Ne=o.convert(le.format,le.colorSpace),Z=o.convert(le.type),ce=T(le.internalFormat,Ne,Z,le.colorSpace,u.isXRRenderTarget===!0),Ee=De(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ce,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,L.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(L.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,a);for(let re=0;re<6;re++)if(a.mipmaps&&a.mipmaps.length>0)for(let le=0;le<a.mipmaps.length;le++)ue(L.__webglFramebuffer[re][le],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else ue(L.__webglFramebuffer[re],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);c(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,le=K.length;re<le;re++){let Ne=K[re],Z=i.get(Ne);t.bindTexture(e.TEXTURE_2D,Z.__webglTexture),Ge(e.TEXTURE_2D,Ne),ue(L.__webglFramebuffer,u,Ne,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),c(Ne)&&r(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(re=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,z.__webglTexture),Ge(re,a),a.mipmaps&&a.mipmaps.length>0)for(let le=0;le<a.mipmaps.length;le++)ue(L.__webglFramebuffer[le],u,a,e.COLOR_ATTACHMENT0,re,le);else ue(L.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,re,0);c(a)&&r(re),t.unbindTexture()}u.depthBuffer&&Re(u)}function ye(u){let a=u.textures;for(let L=0,z=a.length;L<z;L++){let K=a[L];if(c(K)){let G=I(u),pe=i.get(K).__webglTexture;t.bindTexture(G,pe),r(G),t.unbindTexture()}}}let je=[],m=[];function ut(u){if(u.samples>0){if(we(u)===!1){let a=u.textures,L=u.width,z=u.height,K=e.COLOR_BUFFER_BIT,G=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(u),re=a.length>1;if(re)for(let le=0;le<a.length;le++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let le=0;le<a.length;le++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);let Ne=i.get(a[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,L,z,0,0,L,z,K,e.NEAREST),C===!0&&(je.length=0,m.length=0,je.push(e.COLOR_ATTACHMENT0+le),u.depthBuffer&&u.resolveDepthBuffer===!1&&(je.push(G),m.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,m)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<a.length;le++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);let Ne=i.get(a[le]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,Ne,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&C){let a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function De(u){return Math.min(l.maxSamples,u.samples)}function we(u){let a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function me(u){let a=h.render.frame;b.get(u)!==a&&(b.set(u,a),u.update())}function Xe(u,a){let L=u.colorSpace,z=u.format,K=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||L!==En&&L!==Bt&&(tt.getTransfer(L)===Ye?(z!==Tt||K!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),a}function _e(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(v.width=u.naturalWidth||u.width,v.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(v.width=u.displayWidth,v.height=u.displayHeight):(v.width=u.width,v.height=u.height),v}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=Ue,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=we}function yf(e,n){function t(i,l=Bt){let o,h=tt.getTransfer(l);if(i===yt)return e.UNSIGNED_BYTE;if(i===xr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ar)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Xa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ya)return e.BYTE;if(i===qa)return e.SHORT;if(i===mn)return e.UNSIGNED_SHORT;if(i===hr)return e.INT;if(i===en)return e.UNSIGNED_INT;if(i===Dt)return e.FLOAT;if(i===vn)return e.HALF_FLOAT;if(i===Ka)return e.ALPHA;if(i===$a)return e.RGB;if(i===Tt)return e.RGBA;if(i===Za)return e.LUMINANCE;if(i===Qa)return e.LUMINANCE_ALPHA;if(i===Jn)return e.DEPTH_COMPONENT;if(i===hn)return e.DEPTH_STENCIL;if(i===Ja)return e.RED;if(i===Rr)return e.RED_INTEGER;if(i===ja)return e.RG;if(i===Cr)return e.RG_INTEGER;if(i===br)return e.RGBA_INTEGER;if(i===An||i===Rn||i===Cn||i===bn)if(h===Ye)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===An)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===An)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hi||i===mi||i===_i||i===gi)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===hi)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mi)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_i)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vi||i===Ei||i===Si)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===vi||i===Ei)return h===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Si)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===Ci||i===bi||i===Pi||i===Li||i===Ui||i===Di||i===wi||i===Ii||i===yi)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Mi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ti)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ai)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ri)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ci)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Li)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ui)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Di)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ii)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yi)return h===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pn||i===Ni||i===Oi)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Pn)return h===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ni)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oi)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eo||i===Fi||i===Bi||i===Gi)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Pn)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Fi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gi)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}var Nf={type:"move"},Qt=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ke,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ke),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ke,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ke),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){let t=this._hand;if(t)for(let i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let l=null,o=null,h=null,f=this._targetRay,C=this._grip,v=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(v&&n.hand){h=!0;for(let P of n.hand.values()){let c=t.getJointPose(P,i),r=this._getHandJoint(v,P);c!==null&&(r.matrix.fromArray(c.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=c.radius),r.visible=c!==null}let b=v.joints["index-finger-tip"],R=v.joints["thumb-tip"],E=b.position.distanceTo(R.position),x=.02,N=.005;v.inputState.pinching&&E>x+N?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&E<=x-N&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else C!==null&&n.gripSpace&&(o=t.getPose(n.gripSpace,i),o!==null&&(C.matrix.fromArray(o.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,o.linearVelocity?(C.hasLinearVelocity=!0,C.linearVelocity.copy(o.linearVelocity)):C.hasLinearVelocity=!1,o.angularVelocity?(C.hasAngularVelocity=!0,C.angularVelocity.copy(o.angularVelocity)):C.hasAngularVelocity=!1));f!==null&&(l=t.getPose(n.targetRaySpace,i),l===null&&o!==null&&(l=o),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return f!==null&&(f.visible=l!==null),C!==null&&(C.visible=o!==null),v!==null&&(v.visible=h!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){let i=new on;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}},Of=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ff=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zn=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){let l=new vr,o=n.properties.get(l);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=l}}getMesh(n){if(this.texture!==null&&this.mesh===null){let t=n.cameras[0].viewport,i=new It({vertexShader:Of,fragmentShader:Ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qn=class extends to{constructor(n,t){super();let i=this,l=null,o=1,h=null,f="local-floor",C=1,v=null,b=null,R=null,E=null,x=null,N=null,P=new Zn,c=t.getContextAttributes(),r=null,I=null,T=[],_=[],H=new ft,U=null,y=new fn;y.viewport=new ct;let B=new fn;B.viewport=new ct;let p=[y,B],d=new no,A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=T[k];return J===void 0&&(J=new Qt,T[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=T[k];return J===void 0&&(J=new Qt,T[k]=J),J.getGripSpace()},this.getHand=function(k){let J=T[k];return J===void 0&&(J=new Qt,T[k]=J),J.getHandSpace()};function V(k){let J=_.indexOf(k.inputSource);if(J===-1)return;let ue=T[J];ue!==void 0&&(ue.update(k.inputSource,k.frame,v||h),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",Q);for(let k=0;k<T.length;k++){let J=_[k];J!==null&&(_[k]=null,T[k].disconnect(J))}A=null,q=null,P.reset(),n.setRenderTarget(r),x=null,E=null,R=null,l=null,I=null,Ze.stop(),i.isPresenting=!1,n.setPixelRatio(U),n.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||h},this.setReferenceSpace=function(k){v=k},this.getBaseLayer=function(){return E!==null?E:x},this.getBinding=function(){return R},this.getFrame=function(){return N},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(r=n.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",Q),c.xrCompatible!==!0&&await t.makeXRCompatible(),U=n.getPixelRatio(),n.getSize(H),l.renderState.layers===void 0){let J={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(l,t,J),l.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new zt(x.framebufferWidth,x.framebufferHeight,{format:Tt,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:c.stencil})}else{let J=null,ue=null,ie=null;c.depth&&(ie=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=c.stencil?hn:Jn,ue=c.stencil?tn:en);let Me={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};R=new XRWebGLBinding(l,t),E=R.createProjectionLayer(Me),l.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),I=new zt(E.textureWidth,E.textureHeight,{format:Tt,type:yt,depthTexture:new Er(E.textureWidth,E.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:c.stencil,colorSpace:n.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(C),v=null,h=await l.requestReferenceSpace(f),Ze.setContext(l),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function Q(k){for(let J=0;J<k.removed.length;J++){let ue=k.removed[J],ie=_.indexOf(ue);ie>=0&&(_[ie]=null,T[ie].disconnect(ue))}for(let J=0;J<k.added.length;J++){let ue=k.added[J],ie=_.indexOf(ue);if(ie===-1){for(let Re=0;Re<T.length;Re++)if(Re>=_.length){_.push(ue),ie=Re;break}else if(_[Re]===null){_[Re]=ue,ie=Re;break}if(ie===-1)break}let Me=T[ie];Me&&Me.connect(ue)}}let W=new ke,j=new ke;function F(k,J,ue){W.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);let ie=W.distanceTo(j),Me=J.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),$e=Me[14]/(Me[10]+1),ye=(Me[9]+1)/Me[5],je=(Me[9]-1)/Me[5],m=(Me[8]-1)/Me[0],ut=(Re[8]+1)/Re[0],De=Ue*m,we=Ue*ut,me=ie/(-m+ut),Xe=me*-m;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Xe),k.translateZ(me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Me[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let _e=Ue+me,u=$e+me,a=De-Xe,L=we+(ie-Xe),z=ye*$e/u*_e,K=je*$e/u*_e;k.projectionMatrix.makePerspective(a,L,z,K,_e,u),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function he(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;let J=k.near,ue=k.far;P.texture!==null&&(P.depthNear>0&&(J=P.depthNear),P.depthFar>0&&(ue=P.depthFar)),d.near=B.near=y.near=J,d.far=B.far=y.far=ue,(A!==d.near||q!==d.far)&&(l.updateRenderState({depthNear:d.near,depthFar:d.far}),A=d.near,q=d.far),y.layers.mask=k.layers.mask|2,B.layers.mask=k.layers.mask|4,d.layers.mask=y.layers.mask|B.layers.mask;let ie=k.parent,Me=d.cameras;he(d,ie);for(let Re=0;Re<Me.length;Re++)he(Me[Re],ie);Me.length===2?F(d,y,B):d.projectionMatrix.copy(y.projectionMatrix),Se(k,d,ie)};function Se(k,J,ue){ue===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=io*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return d},this.getFoveation=function(){if(!(E===null&&x===null))return C},this.setFoveation=function(k){C=k,E!==null&&(E.fixedFoveation=k),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=k)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(d)};let Le=null;function Ge(k,J){if(b=J.getViewerPose(v||h),N=J,b!==null){let ue=b.views;x!==null&&(n.setRenderTargetFramebuffer(I,x.framebuffer),n.setRenderTarget(I));let ie=!1;ue.length!==d.cameras.length&&(d.cameras.length=0,ie=!0);for(let Re=0;Re<ue.length;Re++){let Ue=ue[Re],$e=null;if(x!==null)$e=x.getViewport(Ue);else{let je=R.getViewSubImage(E,Ue);$e=je.viewport,Re===0&&(n.setRenderTargetTextures(I,je.colorTexture,E.ignoreDepthValues?void 0:je.depthStencilTexture),n.setRenderTarget(I))}let ye=p[Re];ye===void 0&&(ye=new fn,ye.layers.enable(Re),ye.viewport=new ct,p[Re]=ye),ye.matrix.fromArray(Ue.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ue.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set($e.x,$e.y,$e.width,$e.height),Re===0&&(d.matrix.copy(ye.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale)),ie===!0&&d.cameras.push(ye)}let Me=l.enabledFeatures;if(Me&&Me.includes("depth-sensing")){let Re=R.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&P.init(n,Re,l.renderState)}}for(let ue=0;ue<T.length;ue++){let ie=_[ue],Me=T[ue];ie!==null&&Me!==void 0&&Me.update(ie,J,v||h)}Le&&Le(k,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),N=null}let Ze=new Pr;Ze.setAnimationLoop(Ge),this.setAnimationLoop=function(k){Le=k},this.dispose=function(){}}},Pt=new pr,Bf=new kt;function Gf(e,n){function t(c,r){c.matrixAutoUpdate===!0&&c.updateMatrix(),r.value.copy(c.matrix)}function i(c,r){r.color.getRGB(c.fogColor.value,ur(e)),r.isFog?(c.fogNear.value=r.near,c.fogFar.value=r.far):r.isFogExp2&&(c.fogDensity.value=r.density)}function l(c,r,I,T,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(c,r):r.isMeshToonMaterial?(o(c,r),R(c,r)):r.isMeshPhongMaterial?(o(c,r),b(c,r)):r.isMeshStandardMaterial?(o(c,r),E(c,r),r.isMeshPhysicalMaterial&&x(c,r,_)):r.isMeshMatcapMaterial?(o(c,r),N(c,r)):r.isMeshDepthMaterial?o(c,r):r.isMeshDistanceMaterial?(o(c,r),P(c,r)):r.isMeshNormalMaterial?o(c,r):r.isLineBasicMaterial?(h(c,r),r.isLineDashedMaterial&&f(c,r)):r.isPointsMaterial?C(c,r,I,T):r.isSpriteMaterial?v(c,r):r.isShadowMaterial?(c.color.value.copy(r.color),c.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(c,r){c.opacity.value=r.opacity,r.color&&c.diffuse.value.copy(r.color),r.emissive&&c.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.bumpMap&&(c.bumpMap.value=r.bumpMap,t(r.bumpMap,c.bumpMapTransform),c.bumpScale.value=r.bumpScale,r.side===mt&&(c.bumpScale.value*=-1)),r.normalMap&&(c.normalMap.value=r.normalMap,t(r.normalMap,c.normalMapTransform),c.normalScale.value.copy(r.normalScale),r.side===mt&&c.normalScale.value.negate()),r.displacementMap&&(c.displacementMap.value=r.displacementMap,t(r.displacementMap,c.displacementMapTransform),c.displacementScale.value=r.displacementScale,c.displacementBias.value=r.displacementBias),r.emissiveMap&&(c.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,c.emissiveMapTransform)),r.specularMap&&(c.specularMap.value=r.specularMap,t(r.specularMap,c.specularMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest);let I=n.get(r),T=I.envMap,_=I.envMapRotation;T&&(c.envMap.value=T,Pt.copy(_),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),c.envMapRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(Pt)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=r.reflectivity,c.ior.value=r.ior,c.refractionRatio.value=r.refractionRatio),r.lightMap&&(c.lightMap.value=r.lightMap,c.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,c.lightMapTransform)),r.aoMap&&(c.aoMap.value=r.aoMap,c.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,c.aoMapTransform))}function h(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform))}function f(c,r){c.dashSize.value=r.dashSize,c.totalSize.value=r.dashSize+r.gapSize,c.scale.value=r.scale}function C(c,r,I,T){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.size.value=r.size*I,c.scale.value=T*.5,r.map&&(c.map.value=r.map,t(r.map,c.uvTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function v(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.rotation.value=r.rotation,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function b(c,r){c.specular.value.copy(r.specular),c.shininess.value=Math.max(r.shininess,1e-4)}function R(c,r){r.gradientMap&&(c.gradientMap.value=r.gradientMap)}function E(c,r){c.metalness.value=r.metalness,r.metalnessMap&&(c.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,c.metalnessMapTransform)),c.roughness.value=r.roughness,r.roughnessMap&&(c.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,c.roughnessMapTransform)),r.envMap&&(c.envMapIntensity.value=r.envMapIntensity)}function x(c,r,I){c.ior.value=r.ior,r.sheen>0&&(c.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),c.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(c.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,c.sheenColorMapTransform)),r.sheenRoughnessMap&&(c.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,c.sheenRoughnessMapTransform))),r.clearcoat>0&&(c.clearcoat.value=r.clearcoat,c.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(c.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,c.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(c.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===mt&&c.clearcoatNormalScale.value.negate())),r.dispersion>0&&(c.dispersion.value=r.dispersion),r.iridescence>0&&(c.iridescence.value=r.iridescence,c.iridescenceIOR.value=r.iridescenceIOR,c.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(c.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,c.iridescenceMapTransform)),r.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),r.transmission>0&&(c.transmission.value=r.transmission,c.transmissionSamplerMap.value=I.texture,c.transmissionSamplerSize.value.set(I.width,I.height),r.transmissionMap&&(c.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,c.transmissionMapTransform)),c.thickness.value=r.thickness,r.thicknessMap&&(c.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=r.attenuationDistance,c.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(c.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(c.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=r.specularIntensity,c.specularColor.value.copy(r.specularColor),r.specularColorMap&&(c.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,c.specularColorMapTransform)),r.specularIntensityMap&&(c.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,c.specularIntensityMapTransform))}function N(c,r){r.matcap&&(c.matcap.value=r.matcap)}function P(c,r){let I=n.get(r).light;c.referencePosition.value.setFromMatrixPosition(I.matrixWorld),c.nearDistance.value=I.shadow.camera.near,c.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function Hf(e,n,t,i){let l={},o={},h=[],f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function C(I,T){let _=T.program;i.uniformBlockBinding(I,_)}function v(I,T){let _=l[I.id];_===void 0&&(N(I),_=b(I),l[I.id]=_,I.addEventListener("dispose",c));let H=T.program;i.updateUBOMapping(I,H);let U=n.render.frame;o[I.id]!==U&&(E(I),o[I.id]=U)}function b(I){let T=R();I.__bindingPointIndex=T;let _=e.createBuffer(),H=I.__size,U=I.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,H,U),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,_),_}function R(){for(let I=0;I<f;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(I){let T=l[I.id],_=I.uniforms,H=I.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let U=0,y=_.length;U<y;U++){let B=Array.isArray(_[U])?_[U]:[_[U]];for(let p=0,d=B.length;p<d;p++){let A=B[p];if(x(A,U,p,H)===!0){let q=A.__offset,V=Array.isArray(A.value)?A.value:[A.value],Y=0;for(let Q=0;Q<V.length;Q++){let W=V[Q],j=P(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,q+Y,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,q,A.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(I,T,_,H){let U=I.value,y=T+"_"+_;if(H[y]===void 0)return typeof U=="number"||typeof U=="boolean"?H[y]=U:H[y]=U.clone(),!0;{let B=H[y];if(typeof U=="number"||typeof U=="boolean"){if(B!==U)return H[y]=U,!0}else if(B.equals(U)===!1)return B.copy(U),!0}return!1}function N(I){let T=I.uniforms,_=0,H=16;for(let y=0,B=T.length;y<B;y++){let p=Array.isArray(T[y])?T[y]:[T[y]];for(let d=0,A=p.length;d<A;d++){let q=p[d],V=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,Q=V.length;Y<Q;Y++){let W=V[Y],j=P(W),F=_%H,he=F%j.boundary,Se=F+he;_+=he,Se!==0&&H-Se<j.storage&&(_+=H-Se),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=j.storage}}}let U=_%H;return U>0&&(_+=H-U),I.__size=_,I.__cache={},this}function P(I){let T={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(T.boundary=4,T.storage=4):I.isVector2?(T.boundary=8,T.storage=8):I.isVector3||I.isColor?(T.boundary=16,T.storage=12):I.isVector4?(T.boundary=16,T.storage=16):I.isMatrix3?(T.boundary=48,T.storage=48):I.isMatrix4?(T.boundary=64,T.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),T}function c(I){let T=I.target;T.removeEventListener("dispose",c);let _=h.indexOf(T.__bindingPointIndex);h.splice(_,1),e.deleteBuffer(l[T.id]),delete l[T.id],delete o[T.id]}function r(){for(let I in l)e.deleteBuffer(l[I]);h=[],l={},o={}}return{bind:C,update:v,dispose:r}}var cr=class{constructor(n={}){let{canvas:t=ro(),context:i=null,depth:l=!0,stencil:o=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:C=!0,preserveDrawingBuffer:v=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:R=!1,reverseDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=h;let N=new Uint32Array(4),P=new Int32Array(4),c=null,r=null,I=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ao,this.toneMapping=At,this.toneMappingExposure=1;let _=this,H=!1,U=0,y=0,B=null,p=-1,d=null,A=new ct,q=new ct,V=null,Y=new Ke(0),Q=0,W=t.width,j=t.height,F=1,he=null,Se=null,Le=new ct(0,0,W,j),Ge=new ct(0,0,W,j),Ze=!1,k=new Tr,J=!1,ue=!1,ie=new kt,Me=new kt,Re=new ke,Ue=new ct,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function je(){return B===null?F:1}let m=i;function ut(s,S){return t.getContext(s,S)}try{let s={alpha:!0,depth:l,stencil:o,antialias:f,premultipliedAlpha:C,preserveDrawingBuffer:v,powerPreference:b,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),m===null){let S="webgl2";if(m=ut(S,s),m===null)throw ut(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let De,we,me,Xe,_e,u,a,L,z,K,G,pe,re,le,Ne,Z,ce,Ee,Te,fe,Ie,be,ze,g;function te(){De=new nc(m),De.init(),be=new yf(m,De),we=new Zl(m,De,n,be),me=new wf(m,De),we.reverseDepthBuffer&&E&&me.buffers.depth.setReversed(!0),Xe=new ac(m),_e=new Ef,u=new If(m,De,me,_e,we,be,Xe),a=new Jl(_),L=new tc(_),z=new uo(m),ze=new Kl(m,z),K=new ic(m,z,Xe,ze),G=new sc(m,K,z,Xe),Te=new oc(m,we,u),Z=new Ql(_e),pe=new vf(_,a,L,De,we,ze,Z),re=new Gf(_,_e),le=new Mf,Ne=new bf(De),Ee=new ql(_,a,L,me,G,x,C),ce=new Uf(_,G,we),g=new Hf(m,Xe,we,me),fe=new $l(m,De,Xe),Ie=new rc(m,De,Xe),Xe.programs=pe.programs,_.capabilities=we,_.extensions=De,_.properties=_e,_.renderLists=le,_.shadowMap=ce,_.state=me,_.info=Xe}te();let O=new Qn(_,m);this.xr=O,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){let s=De.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){let s=De.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(s){s!==void 0&&(F=s,this.setSize(W,j,!1))},this.getSize=function(s){return s.set(W,j)},this.setSize=function(s,S,D=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=s,j=S,t.width=Math.floor(s*F),t.height=Math.floor(S*F),D===!0&&(t.style.width=s+"px",t.style.height=S+"px"),this.setViewport(0,0,s,S)},this.getDrawingBufferSize=function(s){return s.set(W*F,j*F).floor()},this.setDrawingBufferSize=function(s,S,D){W=s,j=S,F=D,t.width=Math.floor(s*D),t.height=Math.floor(S*D),this.setViewport(0,0,s,S)},this.getCurrentViewport=function(s){return s.copy(A)},this.getViewport=function(s){return s.copy(Le)},this.setViewport=function(s,S,D,w){s.isVector4?Le.set(s.x,s.y,s.z,s.w):Le.set(s,S,D,w),me.viewport(A.copy(Le).multiplyScalar(F).round())},this.getScissor=function(s){return s.copy(Ge)},this.setScissor=function(s,S,D,w){s.isVector4?Ge.set(s.x,s.y,s.z,s.w):Ge.set(s,S,D,w),me.scissor(q.copy(Ge).multiplyScalar(F).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(s){me.setScissorTest(Ze=s)},this.setOpaqueSort=function(s){he=s},this.setTransparentSort=function(s){Se=s},this.getClearColor=function(s){return s.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(s=!0,S=!0,D=!0){let w=0;if(s){let M=!1;if(B!==null){let $=B.texture.format;M=$===br||$===Cr||$===Rr}if(M){let $=B.texture.type,ne=$===yt||$===en||$===mn||$===tn||$===xr||$===Ar,se=Ee.getClearColor(),de=Ee.getClearAlpha(),xe=se.r,Ae=se.g,ge=se.b;ne?(N[0]=xe,N[1]=Ae,N[2]=ge,N[3]=de,m.clearBufferuiv(m.COLOR,0,N)):(P[0]=xe,P[1]=Ae,P[2]=ge,P[3]=de,m.clearBufferiv(m.COLOR,0,P))}else w|=m.COLOR_BUFFER_BIT}S&&(w|=m.DEPTH_BUFFER_BIT),D&&(w|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ee.dispose(),le.dispose(),Ne.dispose(),_e.dispose(),a.dispose(),L.dispose(),G.dispose(),ze.dispose(),g.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",ei),O.removeEventListener("sessionend",ti),Rt.stop()};function X(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let s=Xe.autoReset,S=ce.enabled,D=ce.autoUpdate,w=ce.needsUpdate,M=ce.type;te(),Xe.autoReset=s,ce.enabled=S,ce.autoUpdate=D,ce.needsUpdate=w,ce.type=M}function ae(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ce(s){let S=s.target;S.removeEventListener("dispose",Ce),Qe(S)}function Qe(s){at(s),_e.remove(s)}function at(s){let S=_e.get(s).programs;S!==void 0&&(S.forEach(function(D){pe.releaseProgram(D)}),s.isShaderMaterial&&pe.releaseShaderCache(s))}this.renderBufferDirect=function(s,S,D,w,M,$){S===null&&(S=$e);let ne=M.isMesh&&M.matrixWorld.determinant()<0,se=Ir(s,S,D,w,M);me.setMaterial(w,ne);let de=D.index,xe=1;if(w.wireframe===!0){if(de=K.getWireframeAttribute(D),de===void 0)return;xe=2}let Ae=D.drawRange,ge=D.attributes.position,Oe=Ae.start*xe,He=(Ae.start+Ae.count)*xe;$!==null&&(Oe=Math.max(Oe,$.start*xe),He=Math.min(He,($.start+$.count)*xe)),de!==null?(Oe=Math.max(Oe,0),He=Math.min(He,de.count)):ge!=null&&(Oe=Math.max(Oe,0),He=Math.min(He,ge.count));let et=He-Oe;if(et<0||et===1/0)return;ze.setup(M,w,se,D,de);let Je,Fe=fe;if(de!==null&&(Je=z.get(de),Fe=Ie,Fe.setIndex(Je)),M.isMesh)w.wireframe===!0?(me.setLineWidth(w.wireframeLinewidth*je()),Fe.setMode(m.LINES)):Fe.setMode(m.TRIANGLES);else if(M.isLine){let ve=w.linewidth;ve===void 0&&(ve=1),me.setLineWidth(ve*je()),M.isLineSegments?Fe.setMode(m.LINES):M.isLineLoop?Fe.setMode(m.LINE_LOOP):Fe.setMode(m.LINE_STRIP)}else M.isPoints?Fe.setMode(m.POINTS):M.isSprite&&Fe.setMode(m.TRIANGLES);if(M.isBatchedMesh)if(M._multiDrawInstances!==null)Fe.renderMultiDrawInstances(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount,M._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Fe.renderMultiDraw(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount);else{let ve=M._multiDrawStarts,rt=M._multiDrawCounts,Ve=M._multiDrawCount,gt=de?z.get(de).bytesPerElement:1,Nt=_e.get(w).currentProgram.getUniforms();for(let dt=0;dt<Ve;dt++)Nt.setValue(m,"_gl_DrawID",dt),Fe.render(ve[dt]/gt,rt[dt])}else if(M.isInstancedMesh)Fe.renderInstances(Oe,et,M.count);else if(D.isInstancedBufferGeometry){let ve=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,rt=Math.min(D.instanceCount,ve);Fe.renderInstances(Oe,et,rt)}else Fe.render(Oe,et)};function We(s,S,D){s.transparent===!0&&s.side===Mt&&s.forceSinglePass===!1?(s.side=mt,s.needsUpdate=!0,rn(s,S,D),s.side=Jt,s.needsUpdate=!0,rn(s,S,D),s.side=Mt):rn(s,S,D)}this.compile=function(s,S,D=null){D===null&&(D=s),r=Ne.get(D),r.init(S),T.push(r),D.traverseVisible(function(M){M.isLight&&M.layers.test(S.layers)&&(r.pushLight(M),M.castShadow&&r.pushShadow(M))}),s!==D&&s.traverseVisible(function(M){M.isLight&&M.layers.test(S.layers)&&(r.pushLight(M),M.castShadow&&r.pushShadow(M))}),r.setupLights();let w=new Set;return s.traverse(function(M){if(!(M.isMesh||M.isPoints||M.isLine||M.isSprite))return;let $=M.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){let se=$[ne];We(se,D,M),w.add(se)}else We($,D,M),w.add($)}),T.pop(),r=null,w},this.compileAsync=function(s,S,D=null){let w=this.compile(s,S,D);return new Promise(M=>{function $(){if(w.forEach(function(ne){_e.get(ne).currentProgram.isReady()&&w.delete(ne)}),w.size===0){M(s);return}setTimeout($,10)}De.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let _t=null;function Et(s){_t&&_t(s)}function ei(){Rt.stop()}function ti(){Rt.start()}let Rt=new Pr;Rt.setAnimationLoop(Et),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(s){_t=s,O.setAnimationLoop(s),s===null?Rt.stop():Rt.start()},O.addEventListener("sessionstart",ei),O.addEventListener("sessionend",ti),this.render=function(s,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(S),S=O.getCamera()),s.isScene===!0&&s.onBeforeRender(_,s,S,B),r=Ne.get(s,T.length),r.init(S),T.push(r),Me.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),k.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,J=Z.init(this.clippingPlanes,ue),c=le.get(s,I.length),c.init(),I.push(c),O.enabled===!0&&O.isPresenting===!0){let $=_.xr.getDepthSensingMesh();$!==null&&Mn($,S,-1/0,_.sortObjects)}Mn(s,S,0,_.sortObjects),c.finish(),_.sortObjects===!0&&c.sort(he,Se),ye=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,ye&&Ee.addToRenderList(c,s),this.info.render.frame++,J===!0&&Z.beginShadows();let D=r.state.shadowsArray;ce.render(D,s,S),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let w=c.opaque,M=c.transmissive;if(r.setupLights(),S.isArrayCamera){let $=S.cameras;if(M.length>0)for(let ne=0,se=$.length;ne<se;ne++){let de=$[ne];ii(w,M,s,de)}ye&&Ee.render(s);for(let ne=0,se=$.length;ne<se;ne++){let de=$[ne];ni(c,s,de,de.viewport)}}else M.length>0&&ii(w,M,s,S),ye&&Ee.render(s),ni(c,s,S);B!==null&&(u.updateMultisampleRenderTarget(B),u.updateRenderTargetMipmap(B)),s.isScene===!0&&s.onAfterRender(_,s,S),ze.resetDefaultState(),p=-1,d=null,T.pop(),T.length>0?(r=T[T.length-1],J===!0&&Z.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,I.pop(),I.length>0?c=I[I.length-1]:c=null};function Mn(s,S,D,w){if(s.visible===!1)return;if(s.layers.test(S.layers)){if(s.isGroup)D=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(S);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||k.intersectsSprite(s)){w&&Ue.setFromMatrixPosition(s.matrixWorld).applyMatrix4(Me);let ne=G.update(s),se=s.material;se.visible&&c.push(s,ne,se,D,Ue.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||k.intersectsObject(s))){let ne=G.update(s),se=s.material;if(w&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Ue.copy(s.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ue.copy(ne.boundingSphere.center)),Ue.applyMatrix4(s.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){let de=ne.groups;for(let xe=0,Ae=de.length;xe<Ae;xe++){let ge=de[xe],Oe=se[ge.materialIndex];Oe&&Oe.visible&&c.push(s,ne,Oe,D,Ue.z,ge)}}else se.visible&&c.push(s,ne,se,D,Ue.z,null)}}let $=s.children;for(let ne=0,se=$.length;ne<se;ne++)Mn($[ne],S,D,w)}function ni(s,S,D,w){let M=s.opaque,$=s.transmissive,ne=s.transparent;r.setupLightsView(D),J===!0&&Z.setGlobalState(_.clippingPlanes,D),w&&me.viewport(A.copy(w)),M.length>0&&nn(M,S,D),$.length>0&&nn($,S,D),ne.length>0&&nn(ne,S,D),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ii(s,S,D,w){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[w.id]===void 0&&(r.state.transmissionRenderTarget[w.id]=new zt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?vn:yt,minFilter:Kt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let $=r.state.transmissionRenderTarget[w.id],ne=w.viewport||A;$.setSize(ne.z,ne.w);let se=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(Y),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),ye&&Ee.render(D);let de=_.toneMapping;_.toneMapping=At;let xe=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),r.setupLightsView(w),J===!0&&Z.setGlobalState(_.clippingPlanes,w),nn(s,D,w),u.updateMultisampleRenderTarget($),u.updateRenderTargetMipmap($),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ge=0,Oe=S.length;ge<Oe;ge++){let He=S[ge],et=He.object,Je=He.geometry,Fe=He.material,ve=He.group;if(Fe.side===Mt&&et.layers.test(w.layers)){let rt=Fe.side;Fe.side=mt,Fe.needsUpdate=!0,ri(et,D,w,Je,Fe,ve),Fe.side=rt,Fe.needsUpdate=!0,Ae=!0}}Ae===!0&&(u.updateMultisampleRenderTarget($),u.updateRenderTargetMipmap($))}_.setRenderTarget(se),_.setClearColor(Y,Q),xe!==void 0&&(w.viewport=xe),_.toneMapping=de}function nn(s,S,D){let w=S.isScene===!0?S.overrideMaterial:null;for(let M=0,$=s.length;M<$;M++){let ne=s[M],se=ne.object,de=ne.geometry,xe=w===null?ne.material:w,Ae=ne.group;se.layers.test(D.layers)&&ri(se,S,D,de,xe,Ae)}}function ri(s,S,D,w,M,$){s.onBeforeRender(_,S,D,w,M,$),s.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),M.onBeforeRender(_,S,D,w,s,$),M.transparent===!0&&M.side===Mt&&M.forceSinglePass===!1?(M.side=mt,M.needsUpdate=!0,_.renderBufferDirect(D,S,w,M,s,$),M.side=Jt,M.needsUpdate=!0,_.renderBufferDirect(D,S,w,M,s,$),M.side=Mt):_.renderBufferDirect(D,S,w,M,s,$),s.onAfterRender(_,S,D,w,M,$)}function rn(s,S,D){S.isScene!==!0&&(S=$e);let w=_e.get(s),M=r.state.lights,$=r.state.shadowsArray,ne=M.state.version,se=pe.getParameters(s,M.state,$,S,D),de=pe.getProgramCacheKey(se),xe=w.programs;w.environment=s.isMeshStandardMaterial?S.environment:null,w.fog=S.fog,w.envMap=(s.isMeshStandardMaterial?L:a).get(s.envMap||w.environment),w.envMapRotation=w.environment!==null&&s.envMap===null?S.environmentRotation:s.envMapRotation,xe===void 0&&(s.addEventListener("dispose",Ce),xe=new Map,w.programs=xe);let Ae=xe.get(de);if(Ae!==void 0){if(w.currentProgram===Ae&&w.lightsStateVersion===ne)return oi(s,se),Ae}else se.uniforms=pe.getUniforms(s),s.onBeforeCompile(se,_),Ae=pe.acquireProgram(se,de),xe.set(de,Ae),w.uniforms=se.uniforms;let ge=w.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(ge.clippingPlanes=Z.uniform),oi(s,se),w.needsLights=Nr(s),w.lightsStateVersion=ne,w.needsLights&&(ge.ambientLightColor.value=M.state.ambient,ge.lightProbe.value=M.state.probe,ge.directionalLights.value=M.state.directional,ge.directionalLightShadows.value=M.state.directionalShadow,ge.spotLights.value=M.state.spot,ge.spotLightShadows.value=M.state.spotShadow,ge.rectAreaLights.value=M.state.rectArea,ge.ltc_1.value=M.state.rectAreaLTC1,ge.ltc_2.value=M.state.rectAreaLTC2,ge.pointLights.value=M.state.point,ge.pointLightShadows.value=M.state.pointShadow,ge.hemisphereLights.value=M.state.hemi,ge.directionalShadowMap.value=M.state.directionalShadowMap,ge.directionalShadowMatrix.value=M.state.directionalShadowMatrix,ge.spotShadowMap.value=M.state.spotShadowMap,ge.spotLightMatrix.value=M.state.spotLightMatrix,ge.spotLightMap.value=M.state.spotLightMap,ge.pointShadowMap.value=M.state.pointShadowMap,ge.pointShadowMatrix.value=M.state.pointShadowMatrix),w.currentProgram=Ae,w.uniformsList=null,Ae}function ai(s){if(s.uniformsList===null){let S=s.currentProgram.getUniforms();s.uniformsList=Vt.seqWithValue(S.seq,s.uniforms)}return s.uniformsList}function oi(s,S){let D=_e.get(s);D.outputColorSpace=S.outputColorSpace,D.batching=S.batching,D.batchingColor=S.batchingColor,D.instancing=S.instancing,D.instancingColor=S.instancingColor,D.instancingMorph=S.instancingMorph,D.skinning=S.skinning,D.morphTargets=S.morphTargets,D.morphNormals=S.morphNormals,D.morphColors=S.morphColors,D.morphTargetsCount=S.morphTargetsCount,D.numClippingPlanes=S.numClippingPlanes,D.numIntersection=S.numClipIntersection,D.vertexAlphas=S.vertexAlphas,D.vertexTangents=S.vertexTangents,D.toneMapping=S.toneMapping}function Ir(s,S,D,w,M){S.isScene!==!0&&(S=$e),u.resetTextureUnits();let $=S.fog,ne=w.isMeshStandardMaterial?S.environment:null,se=B===null?_.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:En,de=(w.isMeshStandardMaterial?L:a).get(w.envMap||ne),xe=w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Ae=!!D.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),ge=!!D.morphAttributes.position,Oe=!!D.morphAttributes.normal,He=!!D.morphAttributes.color,et=At;w.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(et=_.toneMapping);let Je=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Fe=Je!==void 0?Je.length:0,ve=_e.get(w),rt=r.state.lights;if(J===!0&&(ue===!0||s!==d)){let ot=s===d&&w.id===p;Z.setState(w,s,ot)}let Ve=!1;w.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==rt.state.version||ve.outputColorSpace!==se||M.isBatchedMesh&&ve.batching===!1||!M.isBatchedMesh&&ve.batching===!0||M.isBatchedMesh&&ve.batchingColor===!0&&M.colorTexture===null||M.isBatchedMesh&&ve.batchingColor===!1&&M.colorTexture!==null||M.isInstancedMesh&&ve.instancing===!1||!M.isInstancedMesh&&ve.instancing===!0||M.isSkinnedMesh&&ve.skinning===!1||!M.isSkinnedMesh&&ve.skinning===!0||M.isInstancedMesh&&ve.instancingColor===!0&&M.instanceColor===null||M.isInstancedMesh&&ve.instancingColor===!1&&M.instanceColor!==null||M.isInstancedMesh&&ve.instancingMorph===!0&&M.morphTexture===null||M.isInstancedMesh&&ve.instancingMorph===!1&&M.morphTexture!==null||ve.envMap!==de||w.fog===!0&&ve.fog!==$||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Z.numPlanes||ve.numIntersection!==Z.numIntersection)||ve.vertexAlphas!==xe||ve.vertexTangents!==Ae||ve.morphTargets!==ge||ve.morphNormals!==Oe||ve.morphColors!==He||ve.toneMapping!==et||ve.morphTargetsCount!==Fe)&&(Ve=!0):(Ve=!0,ve.__version=w.version);let gt=ve.currentProgram;Ve===!0&&(gt=rn(w,S,M));let Nt=!1,dt=!1,Yt=!1,qe=gt.getUniforms(),pt=ve.uniforms;if(me.useProgram(gt.program)&&(Nt=!0,dt=!0,Yt=!0),w.id!==p&&(p=w.id,dt=!0),Nt||d!==s){me.buffers.depth.getReversed()?(ie.copy(s.projectionMatrix),so(ie),lo(ie),qe.setValue(m,"projectionMatrix",ie)):qe.setValue(m,"projectionMatrix",s.projectionMatrix),qe.setValue(m,"viewMatrix",s.matrixWorldInverse);let st=qe.map.cameraPosition;st!==void 0&&st.setValue(m,Re.setFromMatrixPosition(s.matrixWorld)),we.logarithmicDepthBuffer&&qe.setValue(m,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&qe.setValue(m,"isOrthographic",s.isOrthographicCamera===!0),d!==s&&(d=s,dt=!0,Yt=!0)}if(M.isSkinnedMesh){qe.setOptional(m,M,"bindMatrix"),qe.setOptional(m,M,"bindMatrixInverse");let ot=M.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),qe.setValue(m,"boneTexture",ot.boneTexture,u))}M.isBatchedMesh&&(qe.setOptional(m,M,"batchingTexture"),qe.setValue(m,"batchingTexture",M._matricesTexture,u),qe.setOptional(m,M,"batchingIdTexture"),qe.setValue(m,"batchingIdTexture",M._indirectTexture,u),qe.setOptional(m,M,"batchingColorTexture"),M._colorsTexture!==null&&qe.setValue(m,"batchingColorTexture",M._colorsTexture,u));let ht=D.morphAttributes;if((ht.position!==void 0||ht.normal!==void 0||ht.color!==void 0)&&Te.update(M,D,gt),(dt||ve.receiveShadow!==M.receiveShadow)&&(ve.receiveShadow=M.receiveShadow,qe.setValue(m,"receiveShadow",M.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(pt.envMap.value=de,pt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),w.isMeshStandardMaterial&&w.envMap===null&&S.environment!==null&&(pt.envMapIntensity.value=S.environmentIntensity),dt&&(qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),ve.needsLights&&yr(pt,Yt),$&&w.fog===!0&&re.refreshFogUniforms(pt,$),re.refreshMaterialUniforms(pt,w,F,j,r.state.transmissionRenderTarget[s.id]),Vt.upload(m,ai(ve),pt,u)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(Vt.upload(m,ai(ve),pt,u),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&qe.setValue(m,"center",M.center),qe.setValue(m,"modelViewMatrix",M.modelViewMatrix),qe.setValue(m,"normalMatrix",M.normalMatrix),qe.setValue(m,"modelMatrix",M.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){let ot=w.uniformsGroups;for(let st=0,Tn=ot.length;st<Tn;st++){let Ct=ot[st];g.update(Ct,gt),g.bind(Ct,gt)}}return gt}function yr(s,S){s.ambientLightColor.needsUpdate=S,s.lightProbe.needsUpdate=S,s.directionalLights.needsUpdate=S,s.directionalLightShadows.needsUpdate=S,s.pointLights.needsUpdate=S,s.pointLightShadows.needsUpdate=S,s.spotLights.needsUpdate=S,s.spotLightShadows.needsUpdate=S,s.rectAreaLights.needsUpdate=S,s.hemisphereLights.needsUpdate=S}function Nr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(s,S,D){_e.get(s.texture).__webglTexture=S,_e.get(s.depthTexture).__webglTexture=D;let w=_e.get(s);w.__hasExternalTextures=!0,w.__autoAllocateDepthBuffer=D===void 0,w.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(s,S){let D=_e.get(s);D.__webglFramebuffer=S,D.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(s,S=0,D=0){B=s,U=S,y=D;let w=!0,M=null,$=!1,ne=!1;if(s){let de=_e.get(s);if(de.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(m.FRAMEBUFFER,null),w=!1;else if(de.__webglFramebuffer===void 0)u.setupRenderTarget(s);else if(de.__hasExternalTextures)u.rebindTextures(s,_e.get(s.texture).__webglTexture,_e.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){let ge=s.depthTexture;if(de.__boundDepthTexture!==ge){if(ge!==null&&_e.has(ge)&&(s.width!==ge.image.width||s.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");u.setupDepthRenderbuffer(s)}}let xe=s.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ne=!0);let Ae=_e.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Ae[S])?M=Ae[S][D]:M=Ae[S],$=!0):s.samples>0&&u.useMultisampledRTT(s)===!1?M=_e.get(s).__webglMultisampledFramebuffer:Array.isArray(Ae)?M=Ae[D]:M=Ae,A.copy(s.viewport),q.copy(s.scissor),V=s.scissorTest}else A.copy(Le).multiplyScalar(F).floor(),q.copy(Ge).multiplyScalar(F).floor(),V=Ze;if(me.bindFramebuffer(m.FRAMEBUFFER,M)&&w&&me.drawBuffers(s,M),me.viewport(A),me.scissor(q),me.setScissorTest(V),$){let de=_e.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+S,de.__webglTexture,D)}else if(ne){let de=_e.get(s.texture),xe=S||0;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,de.__webglTexture,D||0,xe)}p=-1},this.readRenderTargetPixels=function(s,S,D,w,M,$,ne){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=_e.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){me.bindFramebuffer(m.FRAMEBUFFER,se);try{let de=s.texture,xe=de.format,Ae=de.type;if(!we.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=s.width-w&&D>=0&&D<=s.height-M&&m.readPixels(S,D,w,M,be.convert(xe),be.convert(Ae),$)}finally{let de=B!==null?_e.get(B).__webglFramebuffer:null;me.bindFramebuffer(m.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(s,S,D,w,M,$,ne){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=_e.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){let de=s.texture,xe=de.format,Ae=de.type;if(!we.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=s.width-w&&D>=0&&D<=s.height-M){me.bindFramebuffer(m.FRAMEBUFFER,se);let ge=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ge),m.bufferData(m.PIXEL_PACK_BUFFER,$.byteLength,m.STREAM_READ),m.readPixels(S,D,w,M,be.convert(xe),be.convert(Ae),0);let Oe=B!==null?_e.get(B).__webglFramebuffer:null;me.bindFramebuffer(m.FRAMEBUFFER,Oe);let He=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await co(m,He,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ge),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,$),m.deleteBuffer(ge),m.deleteSync(He),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(s,S=null,D=0){s.isTexture!==!0&&(Ft("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,s=arguments[1]);let w=Math.pow(2,-D),M=Math.floor(s.image.width*w),$=Math.floor(s.image.height*w),ne=S!==null?S.x:0,se=S!==null?S.y:0;u.setTexture2D(s,0),m.copyTexSubImage2D(m.TEXTURE_2D,D,0,0,ne,se,M,$),me.unbindTexture()};let Or=m.createFramebuffer(),Fr=m.createFramebuffer();this.copyTextureToTexture=function(s,S,D=null,w=null,M=0,$=null){s.isTexture!==!0&&(Ft("WebGLRenderer: copyTextureToTexture function signature has changed."),w=arguments[0]||null,s=arguments[1],S=arguments[2],$=arguments[3]||0,D=null),$===null&&(M!==0?(Ft("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=M,M=0):$=0);let ne,se,de,xe,Ae,ge,Oe,He,et,Je=s.isCompressedTexture?s.mipmaps[$]:s.image;if(D!==null)ne=D.max.x-D.min.x,se=D.max.y-D.min.y,de=D.isBox3?D.max.z-D.min.z:1,xe=D.min.x,Ae=D.min.y,ge=D.isBox3?D.min.z:0;else{let ht=Math.pow(2,-M);ne=Math.floor(Je.width*ht),se=Math.floor(Je.height*ht),s.isDataArrayTexture?de=Je.depth:s.isData3DTexture?de=Math.floor(Je.depth*ht):de=1,xe=0,Ae=0,ge=0}w!==null?(Oe=w.x,He=w.y,et=w.z):(Oe=0,He=0,et=0);let Fe=be.convert(S.format),ve=be.convert(S.type),rt;S.isData3DTexture?(u.setTexture3D(S,0),rt=m.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(u.setTexture2DArray(S,0),rt=m.TEXTURE_2D_ARRAY):(u.setTexture2D(S,0),rt=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,S.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,S.unpackAlignment);let Ve=m.getParameter(m.UNPACK_ROW_LENGTH),gt=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Nt=m.getParameter(m.UNPACK_SKIP_PIXELS),dt=m.getParameter(m.UNPACK_SKIP_ROWS),Yt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Je.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Je.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,xe),m.pixelStorei(m.UNPACK_SKIP_ROWS,Ae),m.pixelStorei(m.UNPACK_SKIP_IMAGES,ge);let qe=s.isDataArrayTexture||s.isData3DTexture,pt=S.isDataArrayTexture||S.isData3DTexture;if(s.isDepthTexture){let ht=_e.get(s),ot=_e.get(S),st=_e.get(ht.__renderTarget),Tn=_e.get(ot.__renderTarget);me.bindFramebuffer(m.READ_FRAMEBUFFER,st.__webglFramebuffer),me.bindFramebuffer(m.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Ct=0;Ct<de;Ct++)qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,_e.get(s).__webglTexture,M,ge+Ct),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,$,et+Ct)),m.blitFramebuffer(xe,Ae,ne,se,Oe,He,ne,se,m.DEPTH_BUFFER_BIT,m.NEAREST);me.bindFramebuffer(m.READ_FRAMEBUFFER,null),me.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(M!==0||s.isRenderTargetTexture||_e.has(s)){let ht=_e.get(s),ot=_e.get(S);me.bindFramebuffer(m.READ_FRAMEBUFFER,Or),me.bindFramebuffer(m.DRAW_FRAMEBUFFER,Fr);for(let st=0;st<de;st++)qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ht.__webglTexture,M,ge+st):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ht.__webglTexture,M),pt?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ot.__webglTexture,$,et+st):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ot.__webglTexture,$),M!==0?m.blitFramebuffer(xe,Ae,ne,se,Oe,He,ne,se,m.COLOR_BUFFER_BIT,m.NEAREST):pt?m.copyTexSubImage3D(rt,$,Oe,He,et+st,xe,Ae,ne,se):m.copyTexSubImage2D(rt,$,Oe,He,xe,Ae,ne,se);me.bindFramebuffer(m.READ_FRAMEBUFFER,null),me.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else pt?s.isDataTexture||s.isData3DTexture?m.texSubImage3D(rt,$,Oe,He,et,ne,se,de,Fe,ve,Je.data):S.isCompressedArrayTexture?m.compressedTexSubImage3D(rt,$,Oe,He,et,ne,se,de,Fe,Je.data):m.texSubImage3D(rt,$,Oe,He,et,ne,se,de,Fe,ve,Je):s.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,$,Oe,He,ne,se,Fe,ve,Je.data):s.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,$,Oe,He,Je.width,Je.height,Fe,Je.data):m.texSubImage2D(m.TEXTURE_2D,$,Oe,He,ne,se,Fe,ve,Je);m.pixelStorei(m.UNPACK_ROW_LENGTH,Ve),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,gt),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Nt),m.pixelStorei(m.UNPACK_SKIP_ROWS,dt),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Yt),$===0&&S.generateMipmaps&&m.generateMipmap(rt),me.unbindTexture()},this.copyTextureToTexture3D=function(s,S,D=null,w=null,M=0){return s.isTexture!==!0&&(Ft("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,w=arguments[1]||null,s=arguments[2],S=arguments[3],M=arguments[4]||0),Ft('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(s,S,D,w,M)},this.initRenderTarget=function(s){_e.get(s).__webglFramebuffer===void 0&&u.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?u.setTextureCube(s,0):s.isData3DTexture?u.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?u.setTexture2DArray(s,0):u.setTexture2D(s,0),me.unbindTexture()},this.resetState=function(){U=0,y=0,B=null,me.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;let t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(n),t.unpackColorSpace=tt._getUnpackColorSpace()}};export{Zr as ACESFilmicToneMapping,qt as AddEquation,ta as AddOperation,zf as AdditiveAnimationBlendMode,di as AdditiveBlending,$r as AgXToneMapping,Ka as AlphaFormat,Ba as AlwaysCompare,kn as AlwaysDepth,Xf as AlwaysStencilFunc,Yf as AmbientLight,qf as AnimationAction,Kf as AnimationClip,$f as AnimationLoader,Zf as AnimationMixer,Qf as AnimationObjectGroup,Jf as AnimationUtils,jf as ArcCurve,no as ArrayCamera,ed as ArrowHelper,td as AttachedBindMode,nd as Audio,id as AudioAnalyser,rd as AudioContext,ad as AudioListener,od as AudioLoader,sd as AxesHelper,mt as BackSide,ld as BasicDepthPacking,cd as BasicShadowMap,fd as BatchedMesh,dd as Bone,ud as BooleanKeyframeTrack,pd as Box2,hd as Box3,md as Box3Helper,fr as BoxGeometry,_d as BoxHelper,dn as BufferAttribute,mr as BufferGeometry,gd as BufferGeometryLoader,Ya as ByteType,vd as Cache,Ed as Camera,Sd as CameraHelper,Md as CanvasTexture,Td as CapsuleGeometry,xd as CatmullRomCurve3,Qr as CineonToneMapping,Ad as CircleGeometry,ya as ClampToEdgeWrapping,Rd as Clock,Ke as Color,Cd as ColorKeyframeTrack,tt as ColorManagement,bd as CompressedArrayTexture,Pd as CompressedCubeTexture,Ld as CompressedTexture,Ud as CompressedTextureLoader,Dd as ConeGeometry,Ca as ConstantAlphaFactor,Aa as ConstantColorFactor,wd as Controls,Id as CubeCamera,jt as CubeReflectionMapping,Wt as CubeRefractionMapping,Yr as CubeTexture,yd as CubeTextureLoader,gn as CubeUVReflectionMapping,Nd as CubicBezierCurve,Od as CubicBezierCurve3,Fd as CubicInterpolant,ui as CullFaceBack,Ua as CullFaceFront,Bd as CullFaceFrontBack,La as CullFaceNone,Gd as Curve,Hd as CurvePath,Pa as CustomBlending,qr as CustomToneMapping,Vd as CylinderGeometry,kd as Cylindrical,Xr as Data3DTexture,_r as DataArrayTexture,Wd as DataTexture,zd as DataTextureLoader,Xd as DataUtils,Yd as DecrementStencilOp,qd as DecrementWrapStencilOp,Kd as DefaultLoadingManager,Jn as DepthFormat,hn as DepthStencilFormat,Er as DepthTexture,$d as DetachedBindMode,Zd as DirectionalLight,Qd as DirectionalLightHelper,Jd as DiscreteInterpolant,jd as DodecahedronGeometry,Mt as DoubleSide,Ea as DstAlphaFactor,va as DstColorFactor,eu as DynamicCopyUsage,tu as DynamicDrawUsage,nu as DynamicReadUsage,iu as EdgesGeometry,ru as EllipseCurve,Ha as EqualCompare,Hn as EqualDepth,au as EqualStencilFunc,Nn as EquirectangularReflectionMapping,On as EquirectangularRefractionMapping,pr as Euler,to as EventDispatcher,ou as ExtrudeGeometry,su as FileLoader,lu as Float16BufferAttribute,cu as Float32BufferAttribute,Dt as FloatType,fu as Fog,du as FogExp2,uu as FramebufferTexture,Jt as FrontSide,Tr as Frustum,pu as GLBufferAttribute,hu as GLSL1,li as GLSL3,ka as GreaterCompare,Bn as GreaterDepth,Va as GreaterEqualCompare,Gn as GreaterEqualDepth,mu as GreaterEqualStencilFunc,_u as GreaterStencilFunc,gu as GridHelper,on as Group,vn as HalfFloatType,vu as HemisphereLight,Eu as HemisphereLightHelper,Su as IcosahedronGeometry,Mu as ImageBitmapLoader,Tu as ImageLoader,xu as ImageUtils,Au as IncrementStencilOp,Ru as IncrementWrapStencilOp,Cu as InstancedBufferAttribute,bu as InstancedBufferGeometry,Pu as InstancedInterleavedBuffer,Lu as InstancedMesh,Uu as Int16BufferAttribute,Du as Int32BufferAttribute,wu as Int8BufferAttribute,hr as IntType,Iu as InterleavedBuffer,yu as InterleavedBufferAttribute,Nu as Interpolant,Ou as InterpolateDiscrete,Fu as InterpolateLinear,Bu as InterpolateSmooth,Gu as InvertStencilOp,Hu as KeepStencilOp,Vu as KeyframeTrack,ku as LOD,Wu as LatheGeometry,sa as Layers,Ga as LessCompare,Vn as LessDepth,gr as LessEqualCompare,pn as LessEqualDepth,zu as LessEqualStencilFunc,Xu as LessStencilFunc,Yu as Light,qu as LightProbe,Ku as Line,$u as Line3,Zu as LineBasicMaterial,Qu as LineCurve,Ju as LineCurve3,ju as LineDashedMaterial,ep as LineLoop,tp as LineSegments,Gt as LinearFilter,np as LinearInterpolant,ip as LinearMipMapLinearFilter,rp as LinearMipMapNearestFilter,Kt as LinearMipmapLinearFilter,xn as LinearMipmapNearestFilter,En as LinearSRGBColorSpace,jr as LinearToneMapping,Mr as LinearTransfer,ap as Loader,op as LoaderUtils,sp as LoadingManager,lp as LoopOnce,cp as LoopPingPong,fp as LoopRepeat,Qa as LuminanceAlphaFormat,Za as LuminanceFormat,dp as MOUSE,up as Material,pp as MaterialLoader,hp as MathUtils,mp as Matrix2,Be as Matrix3,kt as Matrix4,wa as MaxEquation,xt as Mesh,Hr as MeshBasicMaterial,la as MeshDepthMaterial,fa as MeshDistanceMaterial,_p as MeshLambertMaterial,gp as MeshMatcapMaterial,vp as MeshNormalMaterial,Ep as MeshPhongMaterial,Sp as MeshPhysicalMaterial,Mp as MeshStandardMaterial,Tp as MeshToonMaterial,Da as MinEquation,Na as MirroredRepeatWrapping,na as MixOperation,ci as MultiplyBlending,ia as MultiplyOperation,Zt as NearestFilter,xp as NearestMipMapLinearFilter,Ap as NearestMipMapNearestFilter,an as NearestMipmapLinearFilter,Oa as NearestMipmapNearestFilter,Kr as NeutralToneMapping,Fa as NeverCompare,Wn as NeverDepth,Rp as NeverStencilFunc,wt as NoBlending,Bt as NoColorSpace,At as NoToneMapping,Cp as NormalAnimationBlendMode,un as NormalBlending,Wa as NotEqualCompare,Fn as NotEqualDepth,bp as NotEqualStencilFunc,Pp as NumberKeyframeTrack,Lp as Object3D,Up as ObjectLoader,ra as ObjectSpaceNormalMap,Dp as OctahedronGeometry,ha as OneFactor,ba as OneMinusConstantAlphaFactor,Ra as OneMinusConstantColorFactor,xa as OneMinusDstAlphaFactor,Ta as OneMinusDstColorFactor,Ma as OneMinusSrcAlphaFactor,Sa as OneMinusSrcColorFactor,Vr as OrthographicCamera,Sr as PCFShadowMap,ea as PCFSoftShadowMap,_n as PMREMGenerator,wp as Path,fn as PerspectiveCamera,Br as Plane,dr as PlaneGeometry,Ip as PlaneHelper,yp as PointLight,Np as PointLightHelper,Op as Points,Fp as PointsMaterial,Bp as PolarGridHelper,Gp as PolyhedronGeometry,Hp as PositionalAudio,Vp as PropertyBinding,kp as PropertyMixer,Wp as QuadraticBezierCurve,zp as QuadraticBezierCurve3,Xp as Quaternion,Yp as QuaternionKeyframeTrack,qp as QuaternionLinearInterpolant,Bi as RED_GREEN_RGTC2_Format,eo as RED_RGTC1_Format,oo as REVISION,ca as RGBADepthPacking,Tt as RGBAFormat,br as RGBAIntegerFormat,wi as RGBA_ASTC_10x10_Format,Li as RGBA_ASTC_10x5_Format,Ui as RGBA_ASTC_10x6_Format,Di as RGBA_ASTC_10x8_Format,Ii as RGBA_ASTC_12x10_Format,yi as RGBA_ASTC_12x12_Format,Mi as RGBA_ASTC_4x4_Format,Ti as RGBA_ASTC_5x4_Format,xi as RGBA_ASTC_5x5_Format,Ai as RGBA_ASTC_6x5_Format,Ri as RGBA_ASTC_6x6_Format,Ci as RGBA_ASTC_8x5_Format,bi as RGBA_ASTC_8x6_Format,Pi as RGBA_ASTC_8x8_Format,Pn as RGBA_BPTC_Format,Si as RGBA_ETC2_EAC_Format,gi as RGBA_PVRTC_2BPPV1_Format,_i as RGBA_PVRTC_4BPPV1_Format,Rn as RGBA_S3TC_DXT1_Format,Cn as RGBA_S3TC_DXT3_Format,bn as RGBA_S3TC_DXT5_Format,Kp as RGBDepthPacking,$a as RGBFormat,$p as RGBIntegerFormat,Ni as RGB_BPTC_SIGNED_Format,Oi as RGB_BPTC_UNSIGNED_Format,vi as RGB_ETC1_Format,Ei as RGB_ETC2_Format,mi as RGB_PVRTC_2BPPV1_Format,hi as RGB_PVRTC_4BPPV1_Format,An as RGB_S3TC_DXT1_Format,Zp as RGDepthPacking,ja as RGFormat,Cr as RGIntegerFormat,Qp as RawShaderMaterial,Jp as Ray,jp as Raycaster,eh as RectAreaLight,Ja as RedFormat,Rr as RedIntegerFormat,Jr as ReinhardToneMapping,th as RenderTarget,Ia as RepeatWrapping,nh as ReplaceStencilOp,ua as ReverseSubtractEquation,ih as RingGeometry,Gi as SIGNED_RED_GREEN_RGTC2_Format,Fi as SIGNED_RED_RGTC1_Format,ao as SRGBColorSpace,Ye as SRGBTransfer,rh as Scene,Pe as ShaderChunk,vt as ShaderLib,It as ShaderMaterial,ah as ShadowMaterial,oh as Shape,sh as ShapeGeometry,lh as ShapePath,ch as ShapeUtils,qa as ShortType,fh as Skeleton,dh as SkeletonHelper,uh as SkinnedMesh,ph as Source,hh as Sphere,mh as SphereGeometry,_h as Spherical,gh as SphericalHarmonics3,vh as SplineCurve,Eh as SpotLight,Sh as SpotLightHelper,Mh as Sprite,Th as SpriteMaterial,_a as SrcAlphaFactor,ga as SrcAlphaSaturateFactor,ma as SrcColorFactor,xh as StaticCopyUsage,Ah as StaticDrawUsage,Rh as StaticReadUsage,Ch as StereoCamera,bh as StreamCopyUsage,Ph as StreamDrawUsage,Lh as StreamReadUsage,Uh as StringKeyframeTrack,da as SubtractEquation,fi as SubtractiveBlending,Dh as TOUCH,aa as TangentSpaceNormalMap,wh as TetrahedronGeometry,vr as Texture,Ih as TextureLoader,yh as TextureUtils,Nh as TorusGeometry,Oh as TorusKnotGeometry,Fh as Triangle,Bh as TriangleFanDrawMode,Gh as TriangleStripDrawMode,Hh as TrianglesDrawMode,Vh as TubeGeometry,kh as UVMapping,zr as Uint16BufferAttribute,Wr as Uint32BufferAttribute,Wh as Uint8BufferAttribute,zh as Uint8ClampedBufferAttribute,Xh as Uniform,Yh as UniformsGroup,ee as UniformsLib,oa as UniformsUtils,yt as UnsignedByteType,tn as UnsignedInt248Type,Xa as UnsignedInt5999Type,en as UnsignedIntType,xr as UnsignedShort4444Type,Ar as UnsignedShort5551Type,mn as UnsignedShortType,St as VSMShadowMap,ft as Vector2,ke as Vector3,ct as Vector4,qh as VectorKeyframeTrack,Kh as VideoTexture,$h as WebGL3DRenderTarget,Zh as WebGLArrayRenderTarget,fo as WebGLCoordinateSystem,Gr as WebGLCubeRenderTarget,Qh as WebGLMultipleRenderTargets,zt as WebGLRenderTarget,cr as WebGLRenderer,yf as WebGLUtils,Jh as WebGPUCoordinateSystem,jh as WireframeGeometry,em as WrapAroundEnding,tm as ZeroCurvatureEnding,pa as ZeroFactor,nm as ZeroSlopeEnding,im as ZeroStencilOp,ro as createCanvasElement};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=three.mjs.map