class Controller {
    constructor(private request, private response) { }

    protected JsonResult(objetResult): void {
        this.response.writeHead(200, { 'Content-Type': 'application/json' });
        this.response.end(JSON.stringify(objetResult));
    }
}

export = Controller;