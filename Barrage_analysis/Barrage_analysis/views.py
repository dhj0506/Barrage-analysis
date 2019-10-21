import requests
import re
import time
import datetime
import json
from django.views import View
from django.http import JsonResponse, HttpResponse


class Barrage:  # 弹幕
    def __init__(self, no, user, content, atime, rtime):
        self._no = no  # 弹幕序号
        self._user = user  # 用户标识
        self._content = content  # 弹幕内容
        self._atime = atime  # 发送时间（绝对时间）
        self._rtime = rtime  # 相对时间（弹幕相对于视频播放的时间）

    @property
    def no(self):
        return self._no

    @property
    def user(self):
        return self._user

    @property
    def content(self):
        return self._content

    @property
    def atime(self):
        return self._atime

    @property
    def rtime(self):
        return self._rtime


all_barrages = []


class ResultView(View):  # 访问/active-users等各个链接前，先以GET请求访问http://127.0.0.1:8000/result/?input_url=https://www.bilibili.com/bangumi/play/ss26878
    def get(self, request):
        n = len(all_barrages)
        del all_barrages[-n:]

        input_url = request.GET.get('input_url', 'https://www.bilibili.com/video/av4014225/')
        # input_url = "https://www.bilibili.com/bangumi/play/ep269854"  # ep形式的链接
        # input_url = "https://www.bilibili.com/bangumi/play/ss26878"  # ss形式的链接
        # input_url = "https://www.bilibili.com/bangumi/play/ep285821?spm_id_from=333.334.b_62696c695f62616e67756d69.8"  # 用于测试
        # print('input_url=' + input_url)

        headers = {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
            'Accept': 'text/html',
            'Cookie': "_uuid=1DBA4F96-2E63-8488-DC25-B8623EFF40E773841infoc; buvid3=FE0D3174-E871-4A3E-877C-A4ED86E20523155831infoc; LIVE_BUVID=AUTO8515670521735348; sid=l765gx48; DedeUserID=33717177; DedeUserID__ckMd5=be4de02fd64f0e56; SESSDATA=cf65a5e0%2C1569644183%2Cc4de7381; bili_jct=1e8cdbb5755b4ecd0346761a121650f5; CURRENT_FNVAL=16; stardustvideo=1; rpdid=|(umY))|ukl~0J'ulY~uJm)kJ; UM_distinctid=16ce0e51cf0abc-02da63c2df0b4b-5373e62-1fa400-16ce0e51cf18d8; stardustpgcv=0606; im_notify_type_33717177=0; finger=b3372c5f; CURRENT_QUALITY=112; bp_t_offset_33717177=300203628285382610"
        }
        # resp = requests.get(input_url, headers=headers)
        # print(resp.text)

        if '/av' in input_url:
            match_rule = r'.*?/av(\d+)'
            av = re.search(match_rule, input_url)
            av = av.group(1)
            # print('av=' + av)
        else:
            resp = requests.get(input_url, headers=headers)
            match_rule = r'.*?/video/av(\d+)'
            av = re.search(match_rule, resp.text)
            if av:
                av = av.group(1)
                # print('av=' + av)
            else:
                match_rule = r',"aid":(.*?),"cid"'
                av = re.search(match_rule, resp.text).group().replace(',"aid":', '').replace(',"cid"', '')
                # print('av=' + av)

        oid_url = "https://api.bilibili.com/x/player/pagelist?aid=" + av
        match_rule = r'\[{"cid":(.*?),"page"'
        resp = requests.get(oid_url, headers=headers)
        oid = re.search(match_rule, resp.text).group().replace('[{"cid":', '').replace(',"page"', '')
        # print('oid=' + oid)

        xml_url = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + oid
        resp = requests.get(xml_url, headers=headers)
        # print(resp.content.decode('utf-8'))

        res = r'<d p="(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?)">(.*?)</d>'
        final_danmu = re.findall(res, resp.content.decode('utf-8'), re.S | re.M)

        id = 0
        for single_danmu in final_danmu:
            id += 1
            all_barrages.append(
                Barrage(id, single_danmu[6], single_danmu[8], datetime.datetime.utcfromtimestamp(int(single_danmu[4])),
                        float(single_danmu[0])))
        # result = final_danmu
        result = len(all_barrages)
        return JsonResponse(result, safe=False)  # 返回的是获取的弹幕的数量，没什么用，可以不用它

    
class ActiveUsersView(View):  # 使用方法举例：http://127.0.0.1:8000/active-users/?level=3
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        level = int(request.GET.get('level', 1))  # 获取参数level
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class PlotChangesView(View):  # 使用方法举例：http://127.0.0.1:8000/plot-changes/?level=3
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        level = int(request.GET.get('level', 1))  # 获取参数level
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class PlayHeatView(View):  # 使用方法举例：http://127.0.0.1:8000/play-heat/
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class ClassicBarrageView(View):  # 使用方法举例：http://127.0.0.1:8000/classic-barrage/?level=3
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        level = int(request.GET.get('level', 1))  # 获取参数level
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class EmotionalChangesView(View):  # 使用方法举例：http://127.0.0.1:8000/emotion-changes/
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class OverallEvaluationView(View):  # 使用方法举例：http://127.0.0.1:8000/overall-evaluation/
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


class FeatureChangesView(View):  # 使用方法举例：http://127.0.0.1:8000/feature-changes/?level=3
    def get(self, request):
        while len(all_barrages) == 0:
            time.sleep(0.1)  # 防止弹幕未获取
        level = int(request.GET.get('level', 1))  # 获取参数level
        # 弹幕从all_barrages获取，all_barrages类型为列表
        # 在这里写语句

        return HttpResponse('这里是json字符串', content_type='application/json')  # 这是返回json的方法之一


