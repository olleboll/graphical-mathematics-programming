-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Värd: mysql16.cliche.se
-- Tid vid skapande: 01 nov 2016 kl 13:28
-- Serverversion: 5.5.52
-- PHP-version: 5.6.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `ollewahl_se`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `examples`
--

CREATE TABLE `examples` (
  `id_examples` int(11) NOT NULL,
  `name_example` varchar(45) NOT NULL,
  `id_user` int(11) NOT NULL,
  `example1` mediumtext,
  `offentlig` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `score` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `settings`
--

CREATE TABLE `settings` (
  `id_settings` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `camera` varchar(45) DEFAULT NULL,
  `toolbox` varchar(1500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(32) NOT NULL,
  `school` varchar(45) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `workspaces`
--

CREATE TABLE `workspaces` (
  `id` int(11) NOT NULL,
  `playerid` int(11) NOT NULL,
  `workspace` text NOT NULL,
  `workspace2` text NOT NULL,
  `workspace3` text NOT NULL,
  `workspace4` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `examples`
--
ALTER TABLE `examples`
  ADD PRIMARY KEY (`id_examples`),
  ADD KEY `id_user_idx` (`id_user`);

--
-- Index för tabell `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id_settings`),
  ADD KEY `id_user_idx` (`id_user`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Index för tabell `workspaces`
--
ALTER TABLE `workspaces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `playerid` (`playerid`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `examples`
--
ALTER TABLE `examples`
  MODIFY `id_examples` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT för tabell `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;
--
-- AUTO_INCREMENT för tabell `settings`
--
ALTER TABLE `settings`
  MODIFY `id_settings` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT för tabell `workspaces`
--
ALTER TABLE `workspaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
