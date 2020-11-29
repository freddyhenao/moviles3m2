-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2020 a las 00:20:13
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taskapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(150) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `task`, `date`) VALUES
(37, 'proyeto de nuevas tecnologias fahl', '10/12/20'),
(41, 'Study PHP3', '12/06/20'),
(42, 'WEB 3', '11/06/20'),
(43, 'WEB 2', '11/06/20'),
(44, 'WEB I', '11/06/20'),
(45, 'WEB II', '11/06/20'),
(46, 'WEB III-fahl', '11/06/20'),
(47, 'WEB III-fahl123', '11/06/20'),
(48, 'WEB 3', '11/06/20'),
(49, 'moviles 3', '11/06/20'),
(50, 'moviles3', '11/06/20'),
(51, 'moviles 3', '11/06/20'),
(52, 'moviles 3', '15/11/2020'),
(53, 'moviles 3 fahl React Native', '26/11/2020'),
(54, 'Moviles 3 fahl 2', '27/11/2020'),
(55, 'Moviles 3 fahl 3', '28/11/2020'),
(59, 'Study Javascript I', '12/06/20'),
(60, 'Study Javascript I', '12/06/20'),
(63, 'Study Javascript', '12/06/20'),
(64, 'Study Javascript', '12/06/20'),
(65, 'Study Javascript', '12/06/20'),
(66, 'Study Javascript', '12/06/20'),
(67, 'Study Javascript', '12/06/20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `identification` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `identification`) VALUES
(1, 'juan@coreo.com', 'juan', '123646789'),
(2, 'camilo@coreo.com', 'camilo', '123646789'),
(3, 'zabala@gmail.com', 'juan', '1214721110');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
