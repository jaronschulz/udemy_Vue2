<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">StockTrader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" class="nav-link" to="/portfolio" activeClass="active">
            <a>Potfolio</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/stocks" activeClass="active">
            <a>Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">End Day</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Save / Load</a>
            <ul class="dropdown-menu">
              <li>
                <a>Save</a>
              </li>
              <li>
                <a>Load</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>