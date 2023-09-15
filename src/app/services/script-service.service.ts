import { Injectable } from '@angular/core';

interface scriptId {
  id: string;
}

interface scriptElement extends scriptId {
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScriptServiceService {
  constructor() {}
  public loadScript({ id, url }: scriptElement) {
    return new Promise((resolve, reject) => {
      if (id && document.getElementById(id)) {
        resolve({ id: id, loaded: true, status: 'Already Loaded' });
      }
      let body = document.body;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.id = id;
      script.onload = () => {
        resolve({ id: id, loaded: true, status: 'Loaded' });
      };
      script.onerror = (error: any) =>
        resolve({ id: id, loaded: false, status: 'Loaded' });
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  public removeScript(scriptId: string[]) {
    const scriptList = scriptId.map((id) => {
      return document.getElementById(`${id}`);
    });
    Array.from(scriptList).forEach((element) => {
      if (element != null) {
        element.remove();
      }
    });
  }
}
