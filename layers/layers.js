ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([261865.669870, 9759498.266903, 435882.425504, 9871835.750262]);
var wms_layers = [];


        var lyr_BASEMAP_0 = new ol.layer.Tile({
            'title': 'BASE MAP',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DESKRIPSIWILAYAH_1 = new ol.format.GeoJSON();
var features_DESKRIPSIWILAYAH_1 = format_DESKRIPSIWILAYAH_1.readFeatures(json_DESKRIPSIWILAYAH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_DESKRIPSIWILAYAH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESKRIPSIWILAYAH_1.addFeatures(features_DESKRIPSIWILAYAH_1);
var lyr_DESKRIPSIWILAYAH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESKRIPSIWILAYAH_1, 
                style: style_DESKRIPSIWILAYAH_1,
                popuplayertitle: 'DESKRIPSI WILAYAH',
                interactive: true,
    title: 'DESKRIPSI WILAYAH<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_0.png" /> BAHAR SELATAN<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_1.png" /> BAHAR UTARA<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_2.png" /> JAMBILUARKOTA<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_3.png" /> KUMPEH<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_4.png" /> KUMPEH ULU<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_5.png" /> MAROSEBO<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_6.png" /> MESTONG<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_7.png" /> SEKERNAN<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_8.png" /> SUNGAIBAHAR<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_9.png" /> SUNGAIGELAM<br />\
    <img src="styles/legend/DESKRIPSIWILAYAH_1_10.png" /> TAMANRAJO<br />' });
var format_RISIKOKERENTANANSOSIAL_2 = new ol.format.GeoJSON();
var features_RISIKOKERENTANANSOSIAL_2 = format_RISIKOKERENTANANSOSIAL_2.readFeatures(json_RISIKOKERENTANANSOSIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_RISIKOKERENTANANSOSIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RISIKOKERENTANANSOSIAL_2.addFeatures(features_RISIKOKERENTANANSOSIAL_2);
var lyr_RISIKOKERENTANANSOSIAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RISIKOKERENTANANSOSIAL_2, 
                style: style_RISIKOKERENTANANSOSIAL_2,
                popuplayertitle: 'RISIKO KERENTANAN SOSIAL',
                interactive: true,
    title: 'RISIKO KERENTANAN SOSIAL<br />\
    <img src="styles/legend/RISIKOKERENTANANSOSIAL_2_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/RISIKOKERENTANANSOSIAL_2_1.png" /> Rendah<br />\
    <img src="styles/legend/RISIKOKERENTANANSOSIAL_2_2.png" /> Sedang<br />\
    <img src="styles/legend/RISIKOKERENTANANSOSIAL_2_3.png" /> Tinggi<br />\
    <img src="styles/legend/RISIKOKERENTANANSOSIAL_2_4.png" /> Sangat Tinggi<br />' });
var format_RISIKOKERENTANANFISIK_3 = new ol.format.GeoJSON();
var features_RISIKOKERENTANANFISIK_3 = format_RISIKOKERENTANANFISIK_3.readFeatures(json_RISIKOKERENTANANFISIK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_RISIKOKERENTANANFISIK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RISIKOKERENTANANFISIK_3.addFeatures(features_RISIKOKERENTANANFISIK_3);
var lyr_RISIKOKERENTANANFISIK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RISIKOKERENTANANFISIK_3, 
                style: style_RISIKOKERENTANANFISIK_3,
                popuplayertitle: 'RISIKO KERENTANAN FISIK',
                interactive: true,
    title: 'RISIKO KERENTANAN FISIK<br />\
    <img src="styles/legend/RISIKOKERENTANANFISIK_3_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/RISIKOKERENTANANFISIK_3_1.png" /> Rendah<br />\
    <img src="styles/legend/RISIKOKERENTANANFISIK_3_2.png" /> Sedang<br />\
    <img src="styles/legend/RISIKOKERENTANANFISIK_3_3.png" /> Tinggi<br />\
    <img src="styles/legend/RISIKOKERENTANANFISIK_3_4.png" /> Sangat Tinggi<br />' });
var format_RISIKOKEBAKARANHUTANDANLAHAN_4 = new ol.format.GeoJSON();
var features_RISIKOKEBAKARANHUTANDANLAHAN_4 = format_RISIKOKEBAKARANHUTANDANLAHAN_4.readFeatures(json_RISIKOKEBAKARANHUTANDANLAHAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_RISIKOKEBAKARANHUTANDANLAHAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RISIKOKEBAKARANHUTANDANLAHAN_4.addFeatures(features_RISIKOKEBAKARANHUTANDANLAHAN_4);
var lyr_RISIKOKEBAKARANHUTANDANLAHAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RISIKOKEBAKARANHUTANDANLAHAN_4, 
                style: style_RISIKOKEBAKARANHUTANDANLAHAN_4,
                popuplayertitle: 'RISIKO KEBAKARAN HUTAN DAN LAHAN',
                interactive: true,
    title: 'RISIKO KEBAKARAN HUTAN DAN LAHAN<br />\
    <img src="styles/legend/RISIKOKEBAKARANHUTANDANLAHAN_4_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/RISIKOKEBAKARANHUTANDANLAHAN_4_1.png" /> Rendah<br />\
    <img src="styles/legend/RISIKOKEBAKARANHUTANDANLAHAN_4_2.png" /> Sedang<br />\
    <img src="styles/legend/RISIKOKEBAKARANHUTANDANLAHAN_4_3.png" /> Tinggi<br />\
    <img src="styles/legend/RISIKOKEBAKARANHUTANDANLAHAN_4_4.png" /> Saangat Tinggi<br />' });

lyr_BASEMAP_0.setVisible(true);lyr_DESKRIPSIWILAYAH_1.setVisible(true);lyr_RISIKOKERENTANANSOSIAL_2.setVisible(true);lyr_RISIKOKERENTANANFISIK_3.setVisible(true);lyr_RISIKOKEBAKARANHUTANDANLAHAN_4.setVisible(true);
var layersList = [lyr_BASEMAP_0,lyr_DESKRIPSIWILAYAH_1,lyr_RISIKOKERENTANANSOSIAL_2,lyr_RISIKOKERENTANANFISIK_3,lyr_RISIKOKEBAKARANHUTANDANLAHAN_4];
lyr_DESKRIPSIWILAYAH_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PENDUDUK': 'PENDUDUK', 'Penduduk_1': 'Penduduk_1', 'KEPADATAN': 'KEPADATAN', 'PDDRENTAN': 'PDDRENTAN', 'PENRENTAN': 'PENRENTAN', 'RENTAN': 'RENTAN', });
lyr_RISIKOKERENTANANSOSIAL_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Risiko': 'Risiko', });
lyr_RISIKOKERENTANANFISIK_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Risiko': 'Risiko', });
lyr_RISIKOKEBAKARANHUTANDANLAHAN_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Risiko': 'Risiko', });
lyr_DESKRIPSIWILAYAH_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PENDUDUK': 'TextEdit', 'Penduduk_1': 'TextEdit', 'KEPADATAN': 'TextEdit', 'PDDRENTAN': 'TextEdit', 'PENRENTAN': 'TextEdit', 'RENTAN': 'TextEdit', });
lyr_RISIKOKERENTANANSOSIAL_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Risiko': 'TextEdit', });
lyr_RISIKOKERENTANANFISIK_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Risiko': 'TextEdit', });
lyr_RISIKOKEBAKARANHUTANDANLAHAN_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Risiko': 'TextEdit', });
lyr_DESKRIPSIWILAYAH_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'header label - always visible', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'PENDUDUK': 'hidden field', 'Penduduk_1': 'hidden field', 'KEPADATAN': 'header label - visible with data', 'PDDRENTAN': 'hidden field', 'PENRENTAN': 'hidden field', 'RENTAN': 'inline label - always visible', });
lyr_RISIKOKERENTANANSOSIAL_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Risiko': 'header label - always visible', });
lyr_RISIKOKERENTANANFISIK_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Risiko': 'header label - always visible', });
lyr_RISIKOKEBAKARANHUTANDANLAHAN_4.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Risiko': 'header label - always visible', });
lyr_RISIKOKEBAKARANHUTANDANLAHAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});