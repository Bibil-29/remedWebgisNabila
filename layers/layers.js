var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kota_Bogor_1 = new ol.format.GeoJSON();
var features_Kota_Bogor_1 = format_Kota_Bogor_1.readFeatures(json_Kota_Bogor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kota_Bogor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_Bogor_1.addFeatures(features_Kota_Bogor_1);
var lyr_Kota_Bogor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kota_Bogor_1, 
                style: style_Kota_Bogor_1,
                popuplayertitle: "Kota_Bogor",
                interactive: true,
                title: '<img src="styles/legend/Kota_Bogor_1.png" /> Kota_Bogor'
            });
var format_Vectorized_2 = new ol.format.GeoJSON();
var features_Vectorized_2 = format_Vectorized_2.readFeatures(json_Vectorized_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vectorized_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vectorized_2.addFeatures(features_Vectorized_2);
var lyr_Vectorized_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vectorized_2, 
                style: style_Vectorized_2,
                popuplayertitle: "Vectorized",
                interactive: true,
                title: '<img src="styles/legend/Vectorized_2.png" /> Vectorized'
            });
var format_Kelerengan_3 = new ol.format.GeoJSON();
var features_Kelerengan_3 = format_Kelerengan_3.readFeatures(json_Kelerengan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelerengan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelerengan_3.addFeatures(features_Kelerengan_3);
var lyr_Kelerengan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelerengan_3, 
                style: style_Kelerengan_3,
                popuplayertitle: "Kelerengan",
                interactive: true,
                title: '<img src="styles/legend/Kelerengan_3.png" /> Kelerengan'
            });
var format_Morfologi_4 = new ol.format.GeoJSON();
var features_Morfologi_4 = format_Morfologi_4.readFeatures(json_Morfologi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Morfologi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morfologi_4.addFeatures(features_Morfologi_4);
var lyr_Morfologi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Morfologi_4, 
                style: style_Morfologi_4,
                popuplayertitle: "Morfologi",
                interactive: true,
    title: 'Morfologi<br />\
    <img src="styles/legend/Morfologi_4_0.png" /> 0<br />\
    <img src="styles/legend/Morfologi_4_1.png" /> 1<br />\
    <img src="styles/legend/Morfologi_4_2.png" /> 2<br />\
    <img src="styles/legend/Morfologi_4_3.png" /> 3<br />\
    <img src="styles/legend/Morfologi_4_4.png" /> 4<br />\
    <img src="styles/legend/Morfologi_4_5.png" /> 5<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kota_Bogor_1.setVisible(true);lyr_Vectorized_2.setVisible(true);lyr_Kelerengan_3.setVisible(true);lyr_Morfologi_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kota_Bogor_1,lyr_Vectorized_2,lyr_Kelerengan_3,lyr_Morfologi_4];
lyr_Kota_Bogor_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_Vectorized_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Kelerengan_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Morfologi_4.set('fieldAliases', {'FID_Clip_G': 'FID_Clip_G', 'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_Kelere': 'FID_Kelere', 'fid_1': 'fid_1', 'DN': 'DN', });
lyr_Kota_Bogor_1.set('fieldImages', {'OBJECTID': '', 'METADATA': '', 'SRS_ID': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'UUPP': '', });
lyr_Vectorized_2.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Kelerengan_3.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Morfologi_4.set('fieldImages', {'FID_Clip_G': 'TextEdit', 'SYMBOLS': 'TextEdit', 'NM_LEMBAR': 'TextEdit', 'NO_LEMBAR': 'Range', 'PROJECT': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', 'DESCRIP1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_Kelere': 'TextEdit', 'fid_1': 'TextEdit', 'DN': 'TextEdit', });
lyr_Kota_Bogor_1.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', });
lyr_Vectorized_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Kelerengan_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Morfologi_4.set('fieldLabels', {'FID_Clip_G': 'inline label - always visible', 'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'no label', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_Kelere': 'no label', 'fid_1': 'no label', 'DN': 'no label', });
lyr_Morfologi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});