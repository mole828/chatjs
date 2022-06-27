import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    this.logger.info(`this.ctx.session.count: ${this.ctx.session.count}`)
    const {session}=this.ctx;
    session.count = session.count?session.count+1:0;
    await this.ctx.render('home',{c:session.count});
    /**
     * ok:
     * ctx.body={}
     * await this.ctx.render('..', {...})
     * 
     * fail:
     * await this.ctx.render('..')
     */
  }
}
