var pathUrlJSONSkuInfos = "/produto/sku/";
var lengthSkus;
var _countAjaxComplete = 0;
var lastStrId;
var objSkusInfo = {skuList: []};
var _indexInList;
var _urlThumbImage;
var strValSku;

$(document).ajaxComplete(initSynchronizeSkuImage);

function initSynchronizeSkuImage()
{
	_countAjaxComplete++;
	
	if(_countAjaxComplete == 1)
	{
		initManager();
	}
}

function initManager()
{

	if($(".select.skuList").length > 0)
	{
		lengthSkus = $(".select.skuList.item-dimension-Cor input").length;

		for(var q = 0; q < lengthSkus; q++)
		{		
			objSkusInfo.skuList[q] = new Object();
		    objSkusInfo.skuList[q].val = $(".select.skuList.item-dimension-Cor input").eq(q).val().toString();
		    objSkusInfo.skuList[q].indexInList = q;
			loadJsonSku(objSkusInfo.skuList[q].val, objSkusInfo.skuList[q].indexInList);

		}			
	}	
}

function loadJsonSku(valSku, indexInList)
{
	strValSku = valSku;
	_indexInList = indexInList;


			
	$.each(skuJson.skus, function(index, value) 
	{

		var objJsonParsed = JSON.stringify(skuJson.skus[index]);


		if(objJsonParsed.split('"')[11] == strValSku)
		{
			var strIdSku = objJsonParsed.split(":")[1].substring(0, objJsonParsed.split(":")[1].indexOf(","));
			var dirtyIdStr, currentIdStr;

			if(objJsonParsed.split(":")[0].indexOf(",") > -1)
			{
				currentIdStr = objJsonParsed.split(":")[1].substring(0, objJsonParsed.split(":")[1].indexOf(","));
			}else
			{
				currentIdStr = objJsonParsed.split(":")[1].substring(0, objJsonParsed.split(":")[1].indexOf(","));
			}

			if(lastStrId != currentIdStr)
			{
				objSkusInfo.skuList[_indexInList].completeIdSku = strIdSku;

				getJsonObjectFromSkuId(strIdSku);									

				lastStrId = currentIdStr;
			}
		
		}
	  
	});

}

function getJsonObjectFromSkuId(intIdSku)
{
	var urlJSONSkuInfos = pathUrlJSONSkuInfos+intIdSku;
	var objSucess;
	
	$.getJSON(urlJSONSkuInfos, function(data) 
	{
		objSucess = data;

		try
		{
			
			var totalImages = objSucess[0]["Images"][0].length;

			for(var i = 0; i < totalImages; i++)
			{
				var archiveTypeId = objSucess[0]["Images"][0][i]["ArchiveTypeId"];

				if(archiveTypeId == 3)
				{
					var urlThumbSku = objSucess[0]["Images"][0][i]["Path"];		
					var _fullId = objSucess[0]["Id"];

					_urlThumbImage = urlThumbSku;

					$.each(objSkusInfo.skuList, function(index, value) 
					{
						
						if(objSkusInfo.skuList[index].completeIdSku == _fullId)
						{
							replaceToThumbSkuOption(_urlThumbImage, objSkusInfo.skuList[index].indexInList);						
						}							  
					});
				}
			}
		}catch(error)
		{
			//console.log(error);
		}

  	});
}

function replaceToThumbSkuOption(urlImage, indexSku)
{
	$(".select.skuList.item-dimension-Cor label").eq(indexSku).css("background", "url('"+urlImage+"') center center no-repeat scroll transparent");	
}

