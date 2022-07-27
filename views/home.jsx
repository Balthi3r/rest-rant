const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
         <main className="text-center">
            <h1>REST-rant</h1>
            <div>
              <img className="col-sm-12" src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
              <div>
                Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
          </main>

      </Def>
    )
  }

module.exports = home

  