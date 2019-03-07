const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');

chai.should();

chai.use(chaiHttp);

describe('Server should be health', () => {
  it('it should GET health', done => {
    chai.request(server).get('/health').end((err, res) => {
      res.should.have.status(200);
      res.should.have.be.a('object');
      res.body.should.have.property('status').eql('UP');
      done();
    })
  })
})

describe('Users', () => {
	it('it should GET foods', done => {
		chai.request(server).get('/users/foods').end((err, res) => {
			console.log(res.body)
			res.should.have.status(200);
			res.should.have.be.a('object');
			res.body[0].should.have.property('id');
			res.body[0].should.have.property('first_name');
			res.body[0].should.have.property('last_name');
			res.body[0].should.have.property('favorite_food');
			done();
		})
	})

	it('it should POST food', done => {
		chai.request(server).post('/users/food')
			.send({
				hero_name: 'monkey',
				first_name: 'george',
				last_name: 'winter',
				favorite_food: 'banana'
			}).end((err, res) => {
				res.should.have.status(200);
				res.should.have.be.a('object');
				res.body.should.have.property('success');
				done();
			})
	})

	it('it should DELETE food', done => {
		chai.request(server).delete('/users/food?first_name=george&last_name=winter').end((err, res) => {
			res.should.have.status(200);
			res.should.have.be.a('object');
			res.body.should.have.property('success');
			res.body.should.have.property('items');
			res.body.items[0].should.have.property('first_name').eql('george')
			res.body.items[0].should.have.property('last_name').eql('winter')
			res.body.items[0].should.have.property('favorite_food').eql(null)
			done()
		})
	})
})